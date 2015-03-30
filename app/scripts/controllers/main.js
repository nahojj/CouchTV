'use strict';

/**
 * @ngdoc function
 * @name couchtvApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the couchtvApp
 */
angular.module('couchtvApp')
  .controller('MainCtrl', function ($scope, $http, $rootScope, tmdb) {

    // Get popular from tmdb API
    tmdb.getPopular().then(function (data) {
      $scope.images = data.results;
    });

    // Upcoming Movies
    tmdb.getUpcoming().then(function (data){
      $scope.upComing = data.results;
    });

    // Discover movie from tmdb API
    tmdb.getDiscover().then(function (data) {
      $scope.the_discoveries = data.results;
    });

    // Get search results from tmdb API
    $scope.$watch('searchField', function (query) {
      if (query) {
        tmdb.getSearch(query).then(function (data) {
          $scope.movies = data.results;
        });
      }	else {
        $scope.movies = [];
      }
    });

  });
