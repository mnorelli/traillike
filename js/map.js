window.onload = function(){
  console.log("map.js is connected")

  // add map
  mapObj.mapDraw();


  // listener on Google Street View, needs to be added after the rest of the JS loads since it calls mapObj
  panoObj.panorama.addListener('pano_changed', function() {
    // Move the map pointer to the new pano coords 
    new_point = [panoObj.panorama.getPosition().lng(),panoObj.panorama.getPosition().lat()];
    mapObj.movePoint(new_point);  
  });

}  // end of window.onload

// starting location in Marin County, MapBox order = lnglat, Google order = latlng
// var start_loc_mapbox = [-122.515086,37.841327];  //  Gerbode Valley
var start_loc_mapbox = [-122.517334, 37.845892]
var start_loc_google = switch_coords(start_loc_mapbox,"object");
var start_zoom = 11.5;

// make maps into objects so access to them won't be limited by scope
var mapObj = {};
var panoObj = {};

mapObj.renderTrail = function(trail){
  if (mapObj.map.getSource('trail')) {
    mapObj.map.removeSource('trail');
    mapObj.map.removeSource('point');
    console.log("removed")
  }
  mapObj.getTrail(trail.id, function(data) {
    // to be implemented
    console.log("calling add trail")
    mapObj.addTrail(data);
  });
  
}

// Street View pano, fires from script call in index
function initPano() {
  panoObj.panorama = new google.maps.StreetViewPanorama(
    document.getElementById('pano'), {
      position: start_loc_google,
      pov: {
        heading: 34,
        pitch: 10
      },
      // remove default Street View controls
      addressControl: false,
      linksControl: true,
      panControl: false,
      enableCloseButton: false
    });
}

// MapBox map
mapObj.mapDraw = function(){
  // make map object
  mapboxgl.accessToken = 'pk.eyJ1IjoibW5vcmVsbGkiLCJhIjoiU3BCcTNJQSJ9.4EsgnQLWdR10NXrt7aBYGw';
  this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/outdoors-v9',
      center: start_loc_mapbox, // starting position
    zoom: start_zoom 
  });

  // add geocoder search box
  // this.map.addControl(new mapboxgl.Geocoder());
}  

mapObj.movePoint = function(coords){
  // change the point data and update the source layer to read in the new point
  mapObj.point.features[0].geometry.coordinates = coords;
  mapObj.map.getSource('point').setData(mapObj.point);
}

mapObj.getTrail = function(name, cb){
  search_url = 'https://api.outerspatial.com/v0/trails?name='+name
  $.get(search_url)
    .done(function(data) {
      // since the returned JSON includes multiple versions of the same named trail,
      // the [0] returns the first, usually the last updated, from the set
      $.get(data.data[0]._links.self)  // json includes a URL to trail details
        .done(function(data){
          // build up an object of data
          var trail = {};
          var trailGeom = data.geometry;
          trail.features = {
            "type": "Feature",
            "properties": {},
            "geometry": trailGeom
          }

          // trail.featureCtr = turf.center({"type": "FeatureCollection","features": [trail.trail_feature]});
          var featureCtr = turf.center({"type": "FeatureCollection","features": [trail.features]});
          trail.centerPt = featureCtr.geometry.coordinates;
          // get the coordinates of the first point in the first trail segment
          trail.first = trailGeom.coordinates[0][0]
          trail.firstPt = turf.point(trail.first)

          // when done call callback with data
          cb(trail)

        })
        .fail(function() {console.log('error getting trail details'); })
    })
    .fail(function() {console.log('error getting trail'); });
}

mapObj.addTrail = function(trail){

  console.log("got data:", trail)
    mapObj.map.addSource('trail', {
      "type": "geojson",
      "data": trail.features
    });
    // add the selected trail
    mapObj.map.addLayer({
        "id": "trail",
        "type": "line",
        "source": "trail",
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "#ff0",
            "line-width": 6,
            "line-opacity": 1
        }
    });
    // fly to the visual center of the trail data
    mapObj.map.flyTo({center: trail.centerPt,zoom:14});

    // define a point at the start of one trail segment
    mapObj.point = {"type": "FeatureCollection",
      "features": [trail.firstPt]
    };
    mapObj.map.addSource('point', {
        "type": "geojson",
        "data": mapObj.point
    });
    // and place it on the map
    mapObj.map.addLayer({
        "id": "point",
        "source": "point",
        "type": "symbol",
        "layout": {
            "icon-image": "aquarium-15",
            "icon-rotate": 0
        }
    });
    // and update the Street View to that point location
    panoObj.sv = new google.maps.StreetViewService();
    panoObj.sv.getPanorama({location: switch_coords(trail.first,"object"), radius: 50}, processSVData);

    // Using Street View Service, look for a nearby Street View panorama when the map is clicked.
    // getPanoramaByLocation will return the nearest pano when the
    // given radius is 50 meters or less.
    mapObj.map.on('click', function(event) {
      // var sv = new google.maps.StreetViewService();
      panoObj.sv.getPanorama({location: switch_coords(event.lngLat,"object"), radius: 50}, processSVData);
    });
};

// returns Street View pano
function processSVData(data, status) {
  if (status === google.maps.StreetViewStatus.OK) {
    panoObj.panorama.setPano(data.location.pano);
    panoObj.panorama.setPov({
      heading: 270,  // refactor:  point this in the trail direction
      pitch: 0
    });
    panoObj.panorama.setVisible(true);
    mapObj.movePoint([data.location.latLng.lng(),data.location.latLng.lat()])
  } else {
    console.error('Street View data not found for this location.');
  }
}

// converts between MapBox and Google coordinates
// if type is not passed in as "array", it will output an object
// assumes negative values are longitude
function switch_coords(coords,type){
  var result = [];  // array to hold initial coords
  var first_key = '';  // track if the first coord is negative, meaning a longitude (in western hemisphere)
  if (Array.isArray(coords)) {  // deal with arrays
    result.push(coords[0]);
    if (coords[0] < 0) {var first_key = "lng";}  // first coord is negative
    result.push(coords[1]);
  } else {                     // deal with objects
    var first_key = Object.keys(coords)[0]
    for (key in coords) { 
      result.push(coords[key])
    }
  }
  if (type == "array") {
    return [result[1],result[0]]
  } else {
    return first_key == 'lng' ? {lat:result[1],lng:result[0]} : {lng:result[1],lat:result[0]}
  }
}
