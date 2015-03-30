'use strict';

/**
 * @ngdoc overview
 * @name couchtvApp
 * @description
 * # couchtvApp
 *
 * Main module of the application.
 */
angular
  .module('couchtvApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngLoadingScreen',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/movie/:id', {
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl'
      })
      .when('/genre/:id', {
        templateUrl: 'views/genre.html',
        controller: 'GenreCtrl'
      })
      .when('/latest', {
        templateUrl: 'views/latest.html',
        controller: 'LatestCtrl'
      })
      .when('/discover', {
        templateUrl: 'views/discover.html',
        controller: 'DiscoverCtrl'
      })
      .when('/coomingsoon', {
        templateUrl: 'views/coomingsoon.html',
        controller: 'CoomingsoonCtrl'
      })
      .when('/toprated', {
        templateUrl: 'views/toprated.html',
        controller: 'TopratedCtrl'
      })
      .when('/person/:id', {
        templateUrl: 'views/person.html',
        controller: 'PersonCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('AppCtrl', function($scope, $filter, $location, tmdb) {
    $scope.showLoader = true;

    // Get search results from tmdb API
    $scope.$watch('searchField', function (query) {

      if (query) {
        tmdb.getSearch(query).then(function (data) {
          console.log($scope.movies);
          $scope.movies = data.results;
        });
      }	else {
        $scope.movies = [];
      }
    });

    // Get Genres from tmdb API
    tmdb.getGenres().then(function (data) {
      $scope.genres = data.genres;
      $scope.showLoader = false;
    });

    $('#menu-toggle').click(function(e) {
      var el = $(this);
      el.text() === el.data('text-swap') ? el.text(el.data('text-original')) : el.text(el.data('text-swap'));
      e.preventDefault();
      $('#wrapper').toggleClass('toggled');
    });

    $scope.isActive = function (viewLocation) {
      var active = (viewLocation === $location.path());
      return active;
    };
  });
