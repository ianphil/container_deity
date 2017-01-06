import {expect} from 'chai';
import parser from './ymlParser.js';

describe('Yaml Parser', () => {
  it('Should return json', () => {
    let actual = JSON.stringify(parser('src/ymlParser/.deity.yml'));
    let expected = JSON.stringify({ service: { instance: 1, name: 'deity' } });

    expect(expected).to.equal(actual);
  });
});

