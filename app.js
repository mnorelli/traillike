var app = angular.module('trailsLike', ['ngRoute']);

console.log('Angular is working.');

////////////
// ROUTES //
////////////

app.config(function($routeProvider,$locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: '/templates/trail-list.html',
      controller: 'TrailsCtrl'
    })
    // .when('/wines/:id', { // the "id" parameter 
    //   templateUrl: 'templates/wines-show.html',
    //   controller: 'TrailsShowCtrl'
    // })
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
})

/////////////////
// CONTROLLERS //
/////////////////

app.controller('TrailsCtrl',function($scope){
// app.controller('TrailsCtrl',function($scope,TrailsService){    // $scope.wine = WineService.query()
  // WineService.query().query(function(data){
  //   $scope.wines = data;
  // });

  $scope.trails = [{profile:"/planning/elevation-profile.jpg",name:"Foof",comments:"Comments",votes:"3"}]
  console.log('trails');

  $scope.hello = "wha??"

  $scope.addTrail = function(search){
    // add some default data for testing
    newTrail = {profile:"planning/elevation-profile.jpg",name:search,comments:"Comments",votes:"3"};
    $scope.trails.push(newTrail);
    console.log($scope.trails);
    window.trails = $scope.trails;
    $scope.search = '';

    // return $scope.trails
  }

})

// app.controller('WinesShowCtrl',function($scope,WineService,$routeParams){
//   $scope.wine = WineService.get($routeParams.id)
// })


////////////
// MODELS //
////////////


// app.factory('WineService', ['$http',function($http){

//   var WineService = {};

//   WineService.query = function(){
//     // return ALL_WINES;
//     return{
//        query: function(callback){
//         $http
//           .get('http://daretoexplore.herokuapp.com/wines')
//           .then(function(response){
//             console.log(response.data)
//             callback(response.data);
//             });
//           }
//       }

//   }

//   WineService.get = function(id){
//     var id = parseInt(id);
//     return ALL_WINES.find(function(wine){
//       return wine.id == id;
//     });
//   }

//   return WineService;

// }])


