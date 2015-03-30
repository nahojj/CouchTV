'use strict';

	/**
	 * @ngdoc function
	 * @name couchtvApp.controller:PersonCtrl
	 * @description
	 * # PersonCtrl
	 * Controller of the couchtvApp
	 */
	angular.module('couchtvApp')
	  .controller('PersonCtrl', function($scope, $routeParams, tmdb) {
	    // Get Person by ID
			tmdb.getPerson($routeParams.id).then(function(person) {
				$scope.person = person;
				$scope.personAge = person.birthday.substring(0,4);
			});

			// Get Person Credits by ID
			tmdb.getPersonCredits($routeParams.id).then(function(personCredits) {
				$scope.personCredits = personCredits.cast;
				console.log(personCredits);
			});

			// Count Year and get Age
			$scope.ageFromYear = function(year) {
			  return new Date().getFullYear() - year;
			}


	  });
