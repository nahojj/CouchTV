'use strict';

describe('Controller: CoomingsoonCtrl', function () {

  // load the controller's module
  beforeEach(module('couchtvApp'));

  var CoomingsoonCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CoomingsoonCtrl = $controller('CoomingsoonCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
