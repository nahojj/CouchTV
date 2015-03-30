'use strict';

describe('Controller: DiscoverCtrl', function () {

  // load the controller's module
  beforeEach(module('couchtvApp'));

  var DiscoverCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DiscoverCtrl = $controller('DiscoverCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
