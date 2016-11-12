'use strict';

describe('Service: AutenticationService', function () {

  // load the service's module
  beforeEach(module('EatMeApp'));

  // instantiate service
  var AutenticationService;
  beforeEach(inject(function (_AutenticationService_) {
    AutenticationService = _AutenticationService_;
  }));

  it('should do something', function () {
    expect(!!AutenticationService).toBe(true);
  });

});
