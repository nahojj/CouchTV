'use strict';

describe('Controller: TopratedCtrl', function () {

  // load the controller's module
  beforeEach(module('couchtvApp'));

  var TopratedCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TopratedCtrl = $controller('TopratedCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
