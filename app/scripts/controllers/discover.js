'use strict';

/**
 * @ngdoc function
 * @name couchtvApp.controller:DiscoverCtrl
 * @description
 * # DiscoverCtrl
 * Controller of the couchtvApp
 */
angular.module('couchtvApp')
  .controller('DiscoverCtrl', function ($scope, $routeParams, tmdb) {
    // Discover movie from tmdb API
    tmdb.getDiscover().then(function (data) {
      $scope.the_discoveries = data.results;
    });
  });
