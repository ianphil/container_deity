var expect = require('chai').expect;
var docker = require('./docker.js');
var fs = require('fs');

describe('Docker Commands', function() {
  var filepath = './testhook.json';

  it('Container exists', function() {
    var actual = docker.container_exists('ubuntu');
    expect(actual).to.be.true;
  });
});
