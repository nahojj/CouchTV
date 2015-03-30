'use strict';

angular.module('couchtvApp')
  .directive('headerelement', function () {
    return {
      templateUrl: 'views/directives/headerElement.html',
      restrict: 'E'
    };
  });
