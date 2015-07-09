var mob = angular.module("mob", ['ui.router']);
mob.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/gig');
  $stateProvider
    .state('gigs', {
      url: "/home",
      templateUrl: "views/feed.html",
      controller: "FeedCtrl"
    })
    .state('gig', {
      url: "/gig",
      templateUrl: "views/onegig.html",
      controller: "GigCtrl"
    })
    .state('create', {
      url: "/create",
      templateUrl: "views/create.html",
      controller: "CreateCtrl"
    });
})
.controller('FeedCtrl', function() {

})
.controller('GigCtrl', function($scope) {
  console.log('working');
  $scope.service = {
    name: "Guitar Lessons",
    poster: "Javier",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam repudiandae eaque, facilis quasi, vitae dolore quam dicta. Ratione, doloribus, odit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis facere, excepturi minus quos! Ipsum sunt sequi, ratione hic aliquid corrupti esse illo, alias voluptate aliquam quasi, consequatur, labore optio excepturi?",
    charity: "Red Cross",
    price: "$500"
  }
})
.controller('CreateCtrl', function() {

})