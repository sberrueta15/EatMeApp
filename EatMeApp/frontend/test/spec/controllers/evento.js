'use strict';

describe('Controller: EventoCtrl', function () {

  // load the controller's module
  beforeEach(module('aaApp'));

  var EventoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventoCtrl = $controller('EventoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EventoCtrl.awesomeThings.length).toBe(3);
  });
});
