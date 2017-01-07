var expect = require('chai').expect;
var parser = require('./yaml_parser.js');
var fs = require('fs');

describe('Yaml Parser', () => {
  var filePath = 'src/yaml/.deity.yml';
  var ymlPayload = fs.readFileSync(filePath, 'utf8');

  it('Parse should return json', () => {
    var actual = JSON.stringify(parser.parse(ymlPayload));
    var expected = JSON.stringify({ service: { instance: 1, name: 'deity' } });

    expect(expected).to.equal(actual);
  });

  it('Validate should throw error.', () => {
    var actual = parser.validate(ymlPayload);

    expect(actual).to.be.true;
  });
});

