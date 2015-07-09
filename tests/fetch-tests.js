
"use strict";

var fetch = require('../src').fetch;

describe("fetch HTTP", ()=> {

  const url = 'http://localhost:8000';

  it("should fetch url", (done)=> {
    fetch({url: url + '/test', method: 'GET'}).then((res)=> {
      res.response.should.equal('test response');
      done();
    });
  });

  it("should reject on error", ()=> {
    return fetch({url: url + '/errorurl', method: 'GET'})
      .should.be.rejected;
  });

});
