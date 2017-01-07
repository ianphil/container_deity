var expect = require('chai').expect;
var down = require('./yaml_download.js');
var yaml = require('js-yaml');

describe('Yaml Download', function() {
  var filepath = 'https://raw.githubusercontent.com/tripdubroot/deity/dev/src/yaml/.deity.yml';

  it('Download should return yaml', function() {
    var expected = yaml.safeDump({ service: { instance: 1, name: 'deity' } });
    down(filepath, (actual) => {
      expect(expected).to.equal(actual);
    });
  });

  it('Yaml should be a string', function() {
    down(filepath, (actual) => {
      expect(actual).to.be.a('string');
    });
  });
});
