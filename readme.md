#TrailLike

![map](http://images.nationalgeographic.com/wpf/media-content/richmedia/0/473/project/trail-maps/img/glacier-main-610.jpg)


##Scope


####Pitch
Trying to decide what trail to take on your next hike?  Too hard to figure out how steep your trail is from your paper map?  Let TrailLike help you and your friends make a choice!  Choose some trails, see how steep they are, and vote on them with your friends.

####Goal
TrailLike will provide a beautiful, secure, and well-built full-stack app solution with a map and other visualizations, and with a backend database, augmented with Firebase-hosted commenting to allow multiple users to pick and curate several trails of interest, see their elevation profiles and other details, vote on the choices, and allow others to see their selections.

##User Stories

####A general user without a login may:
- navigate to the app and see map and search bar
- search for a trail by name or near a location, and click on one found
- see the chosen trail added to the list and give it a name
- see the trail with a thumbnail of its elevation profile in a list of other trails 
- click the trail in the list to open a page showing a 3D-like representation, the elevation profile, Google Street View images where present, nearby amenities, distance/travel time, carbon foot print, or other details
- sign up to use the features available to a logged in user
 
####A logged in user may:
- perform all the actions above
- save a trail or a set of trails into a trip
- add a comment to any trip in a trip
- share the trip via email or link to start their own trail selection process and invite others to join
- on user profile page, see a list of trips already authored
- click any trip to see its trails, comments, votes and users who have been invited to comment
- invite others to view or comment on an existing trip
- upvote or downvote a trail in the trip
- mark a the highest voted trail item as final which closes voting

##Planning and Development

<details><summary>Wireframes</summary>
![wireframe](https://ucarecdn.com/8ebec341-bc84-4563-9fcb-a99672b3334b/Wireframe.png =200x) 
![show](https://ucarecdn.com/5c2052c8-5e8b-4f07-ab06-e39f3f3578e8/ShowPage.jpg =200x)
![signup](https://ucarecdn.com/c20252cd-8dc1-45f7-a17b-511f2771a13c/SignUp.jpg =200x)
![profile](https://ucarecdn.com/a2e849fa-0965-4424-a5a4-71c57d8382fd/Profile.jpg =200x)
</details>

<details><summary>Entity Relationship Diagram (ERD)</summary>
![ERD](https://ucarecdn.com/27100d72-4210-41c3-9d93-5e0c973f91f3/TrailLikeERD.jpg)
</details>

<details><summary>Notes on development</summary>

###First scope

Hopes for this project ran high, and I attempted to throw everything I could think of into the original design.  Most important of of all, I planned to make a trail interaction involving a single page where a trail would be shown in three contexts -- overhead map, Street View, and elevation profile graph -- that interact with each other.  I tested this for a weekend and made slow progress, but time constraints necessitate slimming down the scope and focusing on the minimum viable product.
<details><summary>First project scope details</summary>

#####Breaking up the user stories above into tasks and technologies to test
Good advice: try the trail visulation piece first and back out to something simpler if it proves to challenging for the available time.

#####Visualization
Demonstrate a user interaction between a map, a profile, and Google Street View.

Needs: a map with a route, an elevation profile of that route, and Street Views at places along the route.
Should give a longitude/latitude that will change with user interaction at any of the three views whcih in turn change each of the other views

To allow Maps and Street View, these uses must be enabled on my API key at the [Google dev console for project name: TrailLike](https://console.developers.google.com/apis/api/maps_backend/overview?project=traillike-5b077)

- MAP: Google or MapBox, query locations in radius around a search term or a clicked point
- SEARCH: OuterSpatial API data queried by MapBox map interactions
- CONCATENATE: Link several trails together and treat as one.  Simple object concatenation?
- INTERACTION: Add to list with Angular
- DISPLAY:  3D-like representation built in WebGL or MapBox tilt.  Show nearby amenities as icons from OuterSpatial.  Calculate 3D distance. Calculate travel time based on a metric that must already exist?  Calculate calories burned.  Build into a beautiful display.
- ELEVATIONS: Turn trail or concatenation of trails into an elevation profile.  Show using D3.

#####Basic CRUD app 
Use Rails to build structure around users and their trips, votes, comments.
Angular mini-app in the front-end to handle search UI and voting. 

- COMMENTING: Build a Firebase backend to allow real-time comments and voting.  Show on the trail page and the main page.
- USERS: Use bcrypt, auth, and flash messages and restrictions on various pages.

</details>

###Current scope: Minimum Viable Product
Map searches get added .

</details>

[Trello](https://trello.com/b/6cSDeqnQ/traillike) used to organize development process and tasking.


##Install

This is a web-hosted application. Please navigate to [link coming soon](http://google.com)

##Technologies Used

- HTML/CSS/Javascript
- Bootstrap
- Angular
- Angular Modules
- Custom angular directive for parsing JSON
- Ruby on Rails
- Firebase or ActionCable to allow three-way data binding
- embedded MapBox or OuterSpatial map
- OuterSpatial API
- more...


##Future Development

<details><summary>Wish List</summary>

- overlay the trail profiles on each other, which would need to...
- recalculate the trail profiles based on a consistent y-axis among listed trails to enable an "apples-to-apples" comparison
- use WebGL, Three.js, or A-Frame to provide a 3D-like experience of the trail data
- link to OuterSpatial to allow source data updating
- export trips to PDF Maps
- add photos taken with PDF Maps back into the app
- modals for login, profile
- use friendly URLs to allow sharing
-
</details>


