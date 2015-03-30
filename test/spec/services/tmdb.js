'use strict';

describe('Service: tmdb', function () {

  // load the service's module
  beforeEach(module('couchtvApp'));

  // instantiate service
  var tmdb;
  beforeEach(inject(function (_tmdb_) {
    tmdb = _tmdb_;
  }));

  it('should do something', function () {
    expect(!!tmdb).toBe(true);
  });

});
