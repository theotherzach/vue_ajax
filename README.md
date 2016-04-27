# Vue Ajax

The purpose of this exercise is to read and update users via ajax calls. 

## Setup

+ clone the repo and run bundle install
+ run bundle exec rake db:setup
+ start the rails server and open the root route.

## Instructions

### Part 1: Single User


### Part 2: Many Users
+ Open app/assets/javascripts/components/users.js. Open a new browser tab to where the function usersUrl evaluates to.
+ In the JavaScript console of localhost:3000, run `$.ajax({ method: "GET", url: "/api/users" }).then(function (data) { console.log(data) })`
+ Holy crap, promises! 
+ Use that `$.ajax` call to fill our component with users.
+ Use Vue Dev Tools to verify that our users component is full of users.
+ render an unordered list of users
+ Add a searchText key to the Users data object
+ Add an input with a v-model set to searchText
+ Filter the list with searchText
+ Next to each user, add a button with the text "edit"
+ Create a new file called app/assets/components/user.js. Register a new Vue component called "vue-user"
+ Create a file called vue_templates/user.html and add a script tag with the type of text/template and an id of user-template. Place the text `i'm the user template` inside of the template.
+ Make sure your `vue-user` component has a `template: #user-template` and that you're rendering the partial `vue_templates/user` inside of the `home.html.erb` file.
+ Add the key ` props: ['user'],` to your vue-user component. 
+ Iterate over your users via `<vue-user v-for="user in users" :user="user"> <vue-user>`
+ Extract the guts of each `<li>` into your vue-user template file.
+ When a user clicks "edit" the user's static text fields should turn into inputs, and the "edit" button should turn into a save.
