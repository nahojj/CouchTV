'use strict';

/**
 * @ngdoc function
 * @name couchtvApp.controller:ImagesCtrl
 * @description
 * # ImagesCtrl
 * Controller of the couchtvApp
 */
angular.module('couchtvApp')
  .service('getImages', function($http) {
  	return {
  		async: function () {
  			return $http.get('http://api.themoviedb.org/3/movie/popular?api_key=08edb5883bdbd866cb7b58d656f3c66c');
  		}
  	};
  })
  .controller('ImagesCtrl', function ($http, $scope, getImages) {
  	getImages.async().then(function(d) {
  		$scope.image = d.data;
  		console.log(d.data);
  	});
  });










