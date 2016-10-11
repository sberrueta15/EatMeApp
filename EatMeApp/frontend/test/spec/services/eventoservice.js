'use strict';

describe('Service: eventoService', function () {

  // load the service's module
  beforeEach(module('EatMeApp'));

  // instantiate service
  var eventoService;
  beforeEach(inject(function (_eventoService_) {
    eventoService = _eventoService_;
  }));

  it('should do something', function () {
    expect(!!eventoService).toBe(true);
  });

});
