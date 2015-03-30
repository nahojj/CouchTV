'use strict';

/**
 * @ngdoc function
 * @name couchtvApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the couchtvApp
 */
angular.module('couchtvApp')
	.service('getMovie', function($http, $routeParams) {
		return {
			async: function () {
				return $http.get('http://api.themoviedb.org/3/movie/' + $routeParams.id + '?api_key=08edb5883bdbd866cb7b58d656f3c66c');
			}
		};
	})
  .controller('MovieCtrl', function ($http, $routeParams, $scope, getMovie, tmdb) {

		getMovie.async().then(function(d) {
    	$scope.movie 	= d.data;
    	$scope.genres = d.data.genres;
    });

    tmdb.getTrailers($routeParams.id).then(function(trailer) {
    	$scope.trailers = trailer.results;
    	$scope.code 		= trailer.results[0].key;
    });

    tmdb.getReviews($routeParams.id).then(function(review) {
      $scope.reviews = review.data;
    });

		tmdb.getCredits($routeParams.id).then(function(credit) {
			$scope.creditCasts 	= credit.cast;
			$scope.creditCrew 	= credit.crew;

			$scope.crewProd 		= [];
			$scope.castProd 		= [];

			angular.forEach($scope.creditCrew, function(crew) {
				if(crew.profile_path) {
					$scope.crewProd.push(crew);
				}
			});

			angular.forEach($scope.castProd, function(cast) {
				if(cast.profile_path) {
					$scope.castProd.push(crew);
				}
			});
		});

		tmdb.getPerson($routeParams.id).then(function(person) {
			$scope.person = person;
		});

		tmdb.getSimilar($routeParams.id).then(function(similar) {
			$scope.similar = similar.results;
		});
  })
  .directive('myYoutube', function($sce) {
  return {
    restrict: 'EA',
    scope: { code:'=' },
    replace: true,
    template: '<div style="width:100%;height:440px;"><iframe id="movie" type="text/html" width="100%" height="100%" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
    link: function (scope) {
        scope.$watch('code', function (newVal) {
           if (newVal) {
               scope.url = $sce.trustAsResourceUrl('http://www.youtube.com/embed/' + newVal + '?autoplay=0&color=white&showinfo=0&controls=0&enablejsapi=1');
           }
        });
    }
  };
});
