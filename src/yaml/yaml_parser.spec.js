import {expect} from 'chai';
import parser from './yaml_parser.js';
import fs from 'fs';

describe('Yaml Parser', () => {
  let filePath = 'src/yaml/.deity.yml';
  let ymlPayload = fs.readFileSync(filePath, 'utf8');

  it('Parse should return json', () => {
    let actual = JSON.stringify(parser.parse(ymlPayload));
    let expected = JSON.stringify({ service: { instance: 1, name: 'deity' } });

    expect(expected).to.equal(actual);
  });

  it('Validate should throw error.', () => {
    let actual = parser.validate(ymlPayload);

    expect(actual).to.be.true;
  });
});

