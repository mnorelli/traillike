# <img src="https://cloud.githubusercontent.com/assets/7833470/10899314/63829980-8188-11e5-8cdd-4ded5bcb6e36.png" height="60"> Angular Weekend Lab - TrailLike

![map](http://images.nationalgeographic.com/wpf/media-content/richmedia/0/473/project/trail-maps/img/glacier-main-610.jpg)


##Scope


####Pitch
Trying to decide what trail to take on your next hike?  Too hard to figure out how steep your trail is from your paper map?  Let TrailLike help you and your friends make a choice!  Choose some trails, see how steep they are, and vote on them with your friends.

####Goal
Provide a single-page app with a map and a Firebase backend to allow multiple users to pick several trails of interest, see their elevation profiles, vote on the choices, and allow others to see their choices.

##User Stories

####A user may:
- receive an invitation from another user to use the app to vote on a trail, or starts their own trail selection process and invites others to join
- navigate to the app and see map and search bar
- search for a trail by name or click on one shown
- see the chosen trail added to the list
- show the trail with its elevation profile in a list of other trails 
- click the trail in the list to open the elevation profile in a modal
- upvote or downvote the trail in the list
- see the votes of others
- add a comment to the trail item
- mark a the highest voted trail item as final which closes voting 

##Planning

<details><summary>Wireframes</summary>
![wireframe](https://ucarecdn.com/8ebec341-bc84-4563-9fcb-a99672b3334b/Wireframe.png =200x) 
![wireframe modal](https://ucarecdn.com/f0058f43-66fc-44fc-94e4-16b5de665a2a/WireframeModal.png =200x)</details>

##Install

This is a single-page, web-hosted, app.  Please navigate to [link coming soon](http://google.com)

##Task List 
only partially completed

- [x] basic Angular app
- [x] View
- [ ] Firebase
- [ ] button to add trail - use OpenTrails API
- [ ] add trail lis t - use table module
- [ ] add modal
- [ ] add comment
- [ ] add voting
- [ ] add final to stop voting
- [ ] add map - use map module
- [ ] add trails - use OpenTrails
- [ ] convert trail geometry to elevation profile - use grid module, use loading module
- [ ] add share button functionality

##Technologies Used

- HTML/CSS/Javascript
- Angular
  - ngIf, ngSrc, ngController, ngApp, ngRepeat, ngModel
- Bootstrap
- Firebase to allow three-way data binding
- embedded MapBox or OuterSpatial map
- OuterSpatial API
- Angular Modules
- Custom angular directive for parsing JSON

##Wish List
- overlay the trail profiles on each other
- recalculate the trail profiles based on a consistent y-axis among listed trails to enable an "apples-to-apples" comparison



---

##Original Assignment

**Objective:** The goal of this project is to build an Angular application with the server/back-end of your choice. Your app will not have user authentication, since we'll cover SPA auth on Monday.

## Requirements

What you build is up to you, but you must follow these requirements:

* Your Angular app must have at least TWO client-side routes (use either `ngRoute` or `ui-router`) with associated templates and controllers.
* Your Angular app must send at least ONE HTTP request (use either `$http` or `ng-resource`) to any server.
* In terms of your server / back-end, you have choices:
	* External API
	* Back-end as a service (e.g. [Firebase](https://firebase.google.com/))
	* Build your own API

* Your app should be beautifully designed and pleasant to use. Write user stories, draw wireframes, and use well-designed websites as inspiration.
* Your code should be organized and commented, and you should push your project to GitHub with frequent, descriptive commit messages.
* You should not write any jQuery code yourself. Try your best to do angular-style DOM manipulation using built-in and custom directives.

**You are welcome to pair-program for this project. If you choose to pair, tag your partner in the pull request you submit to turn in your lab.**

## App Ideas

* <a href="http://josephrocca.com/startupideasgenerator" target="_blank">Startup Ideas Generator</a>
* A Stack Overflow clone with questions, answers, comments, and votes.
* A microblog, journal, or to do list.
* A "Yelp for" - create reviews about anything - yoga studios, online stores, toast, you name it.
* A flashcard app for studying, with decks of flash cards.
* Anything else you can think of!

## Example Stretch Features

* Create and use a <a href="https://github.com/sf-wdi-24/intro-angular-lab/blob/master/custom-directives.md" target="_blank">custom angular directive</a>.
* Use an <a href="https://angular-ui.github.io" target="_blank">angular-ui module</a> for a UI component or feature.
* Incorporate an external Angular directive *other than an angular-ui module* (for example, `ngDraggable` or `ngStorage` - one place to browse is <a href="http://ngmodules.org" target="_blank">ng-modules</a>).

## Getting Started

1. Create an repo on Github to contain your project.
1. Create an appropriate `.gitignore`.
1. Create a `readme` explaining the purpose of your project, in addition to any other relevant information.
1. Plan out your user-stories and simple wireframes
1. Happy coding (don't forget to commit frequently)!

## Some Resources

* <a href="http://jsonplaceholder.typicode.com/" target="_blank">JSONPlaceholder</a> (RESTful API with mock JSON data)
* <a href="https://super-crud.herokuapp.com" target="_blank">Super CRUD</a> (RESTful API with mock JSON data)
