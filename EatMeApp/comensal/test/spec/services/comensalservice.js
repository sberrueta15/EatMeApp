'use strict';

describe('Service: ComensalService', function () {

  // load the service's module
  beforeEach(module('comensal'));

  // instantiate service
  var ComensalService;
  beforeEach(inject(function (_ComensalService_) {
    ComensalService = _ComensalService_;
  }));

  it('should do something', function () {
    expect(!!ComensalService).toBe(true);
  });

});
