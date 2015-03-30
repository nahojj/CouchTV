'use strict';

/**
 * @ngdoc function
 * @name couchtvApp.controller:CoominsoonCtrl
 * @description
 * # CoominsoonCtrl
 * Controller of the couchtvApp
 */
angular.module('couchtvApp')
  .controller('CoomingsoonCtrl', function ($scope, $routeParams, tmdb) {
    // Upcoming Movies
    tmdb.getUpcoming().then(function (data){
      $scope.upComing = data.results;
    });
  });
