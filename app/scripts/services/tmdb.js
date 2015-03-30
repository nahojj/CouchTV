'use strict';

angular.module('couchtvApp')
  .factory('tmdb', function tmdb($resource, $http, $q) {
  	var apiUrl = 'http://api.themoviedb.org/3',
  			apiKey = 'api_key=08edb5883bdbd866cb7b58d656f3c66c';

  	return {
  		// Search
	  	getSearch: function (query) {
	  		var ret = $q.defer();
	  		$http.get(apiUrl + '/search/movie?query=' + encodeURIComponent(query) + '&' + apiKey, {
	  		}).success(function (r) {
	  			ret.resolve(r);
	  		});
	  		return ret.promise;
	  	},

      // Get Latest
      getLatest: function () {
        var ret = $q.defer();
        $http.get(apiUrl + '/movie/now_playing' + '?' + apiKey, {
        }).success(function (r) {
          ret.resolve(r);
        });
        return ret.promise;
      },

		  // Get Popular
		  getPopular: function () {
	  		var ret = $q.defer();
		  	$http.get(apiUrl + '/movie/popular' + '?' + apiKey, {
		  	}).success(function (r) {
		  		ret.resolve(r);
		  	});
		  	return ret.promise;
		  },

      // Get TopRated
      getTopedRated: function () {
        var ret = $q.defer();
        $http.get(apiUrl + '/movie/top_rated' + '?' + apiKey, {
        }).success(function (r) {
          ret.resolve(r);
        });
        return ret.promise;
      },

		  // Get Genres
		  getGenres: function () {
	  		var ret = $q.defer();
		  	$http.get(apiUrl + '/genre/movie/list' + '?' + apiKey, {
		  	}).success(function (r) {
		  		ret.resolve(r);
		  	});
		  	return ret.promise;
		  },

		  getGenreById: function (genre) {
	  		var ret = $q.defer();
		  	$http.get(apiUrl + '/genre/'+ genre +'/movies' + '?' + apiKey, {
		  	}).success(function (r) {
		  		ret.resolve(r);
		  	});
		  	return ret.promise;
		  },

		  // Discover Moviess
		  getDiscover: function () {
	  		var ret = $q.defer();
		  	$http.get(apiUrl + '/discover/movie' + '?' + apiKey, {
		  	}).success(function (r) {
		  		ret.resolve(r);
		  	});
		  	return ret.promise;
		  },

		  // Upcoming Movies
		  getUpcoming: function () {
	  		var ret = $q.defer();
		  	$http.get(apiUrl + '/movie/upcoming' + '?' + apiKey, {
		  	}).success(function (r) {
		  		ret.resolve(r);
		  	});
		  	return ret.promise;
		  },

		  // Get MovieTrailers
		  getTrailers: function (movie_id) {
	  		var ret = $q.defer();
		  	$http.get(apiUrl + '/movie/' + movie_id + '/videos' + '?' + apiKey, {
		  	}).success(function (r) {
		  		ret.resolve(r);
		  	});
		  	return ret.promise;
		  },

		  // Get Reviews
		  getReviews: function (review_id) {
	  		var ret = $q.defer();
		  	$http.get(apiUrl + '/movie/' + review_id + '/reviews' + '?' + apiKey, {
		  	}).success(function (r) {
		  		ret.resolve(r);
		  	});
		  	return ret.promise;
		  },

      // Get Similar
      getSimilar: function (movie_id) {
        var ret = $q.defer();
        $http.get(apiUrl + '/movie/' + movie_id + '/similar' + '?' + apiKey, {
        }).success(function (r) {
          ret.resolve(r);
        });
        return ret.promise;
      },

      // Get the cast and crew information
      getCredits: function (credits_id) {
        var ret = $q.defer();
        $http.get(apiUrl + '/movie/' + credits_id + '/credits' + '?' + apiKey, {
        }).success(function (r) {
          ret.resolve(r);
        });
        return ret.promise;
      },

      // Get person info by ID
      getPerson: function (person_id) {
        var ret = $q.defer();
        $http.get(apiUrl + '/person/' + person_id  + '?' + apiKey, {
        }).success(function (r) {
          ret.resolve(r);
        });
        return ret.promise;
      },

      // Get the movie credits for a specific person id.
      getPersonCredits: function (person_id) {
        var ret = $q.defer();
        $http.get(apiUrl + '/person/' + person_id  + '/movie_credits' + '?' + apiKey, {
        }).success(function (r) {
          ret.resolve(r);
        });
        return ret.promise;
      }

	 };
});
