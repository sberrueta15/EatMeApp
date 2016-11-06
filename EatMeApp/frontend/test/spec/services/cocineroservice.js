'use strict';

describe('Service: CocineroService', function () {

  // load the service's module
  beforeEach(module('EatMeApp'));

  // instantiate service
  var CocineroService;
  beforeEach(inject(function (_CocineroService_) {
    CocineroService = _CocineroService_;
  }));

  it('should do something', function () {
    expect(!!CocineroService).toBe(true);
  });

});
