var expect = require('chai').expect;
var docker = require('./docker.js');
var fs = require('fs');

describe('Docker Commands', function() {
  var filepath = './testhook.json';

  it('Container exists', function(done) {
    docker.container_exists('ubuntu')
      .then((data) => {
        expect(data).to.be.true;
        done();
      });
  });
});
