'use strict';

/**
 * @ngdoc function
 * @name couchtvApp.controller:TopratedCtrl
 * @description
 * # TopratedCtrl
 * Controller of the couchtvApp
 */
angular.module('couchtvApp')
  .controller('TopratedCtrl', function($scope, $routeParams, tmdb) {
    // Latest Movies
    tmdb.getTopedRated().then(function (data) {
      $scope.topRated = data.results;
    });
  });
