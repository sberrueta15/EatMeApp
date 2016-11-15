'use strict';

describe('Controller: ComensalmiseventosCtrl', function () {

  // load the controller's module
  beforeEach(module('comensal'));

  var ComensalmiseventosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ComensalmiseventosCtrl = $controller('ComensalmiseventosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ComensalmiseventosCtrl.awesomeThings.length).toBe(3);
  });
});
