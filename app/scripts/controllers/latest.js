'use strict';

/**
 * @ngdoc function
 * @name couchtvApp.controller:LatestCtrl
 * @description
 * # LatestCtrl
 * Controller of the couchtvApp
 */
angular.module('couchtvApp')
  .controller('LatestCtrl', function($scope, $routeParams, tmdb) {
    // Latest Movies
    tmdb.getLatest().then(function (data) {
      $scope.latest = data.results;
    });
  });
