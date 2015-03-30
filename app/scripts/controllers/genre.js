'use strict';

/**
 * @ngdoc function
 * @name couchtvApp.controller:GenreCtrl
 * @description
 * # GenreCtrl
 * Controller of the couchtvApp
 */
angular.module('couchtvApp')
  .controller('GenreCtrl', function ($scope, $routeParams, tmdb) {

    tmdb.getGenreById($routeParams.id).then(function (data) {
      $scope.moviesByGenre = data.results;
    });

  });
