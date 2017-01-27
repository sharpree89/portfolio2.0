var app = angular.module("portfolio", ["ui.router", 'ngAnimate']);

app.controller("MainCtrl", [
  "$scope",
  function($scope){

    $scope.projects = [
      {title: "Bakeit", tech: "Javascript (MongoDB, Express, AngularJS, Node.js)", image: "https://s-media-cache-ak0.pinimg.com/originals/0c/38/68/0c3868e0153a621272b198c68620894c.jpg", link: "https://google.com"},
      {title: "Pizza Party", tech: "Python (Flask, SQL)", image: "https://s-media-cache-ak0.pinimg.com/originals/0c/38/68/0c3868e0153a621272b198c68620894c.jpg", link: "https://google.com"},
      {title: "Group Chat", tech: "Javascript (Node.js, Socket.IO)", image: "https://s-media-cache-ak0.pinimg.com/originals/0c/38/68/0c3868e0153a621272b198c68620894c.jpg", link: "https://google.com"},
      {title: "2D RPG", tech: "C# (Unity2D)", image: "https://s-media-cache-ak0.pinimg.com/originals/0c/38/68/0c3868e0153a621272b198c68620894c.jpg", link: "https://google.com"},
      {title: "Wizard's Duel", tech: "Python (Django)", image: "https://s-media-cache-ak0.pinimg.com/originals/0c/38/68/0c3868e0153a621272b198c68620894c.jpg", link: "https://google.com"},
      {title: "Timely", tech: "Python (Django, SQL)", image: "https://s-media-cache-ak0.pinimg.com/originals/0c/38/68/0c3868e0153a621272b198c68620894c.jpg", link: "https://google.com"},
      {title: "Portfolio", tech: "Javascript (AngularJS, Express, Node.js)", image: "https://s-media-cache-ak0.pinimg.com/originals/0c/38/68/0c3868e0153a621272b198c68620894c.jpg", link: "https://google.com"}
    ]

  }
])

app.config([
  "$stateProvider",
  "$urlRouterProvider",
  function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "/home.html",
        controller: "MainCtrl"
      })
      .state("about", {
        url: "/about",
        templateUrl: "/about.html",
        controller: "MainCtrl"
      })
      .state("projects", {
        url: "/projects",
        templateUrl: "/projects.html",
        controller: "MainCtrl"
      })
      .state("contact", {
        url: "/contact",
        templateUrl: "/contact.html",
        controller: "MainCtrl"
      });

    $urlRouterProvider.otherwise("home");
  }
]);
