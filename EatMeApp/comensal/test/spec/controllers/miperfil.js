'use strict';

describe('Controller: MiperfilCtrl', function () {

  // load the controller's module
  beforeEach(module('comensal'));

  var MiperfilCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MiperfilCtrl = $controller('MiperfilCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MiperfilCtrl.awesomeThings.length).toBe(3);
  });
});
