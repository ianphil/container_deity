import fs from 'fs';
import yaml from 'js-yaml';

export default {
  parse: (payload) => {
    try {
      var doc = yaml.safeLoad(payload);
      return doc;
    } catch (e) {
      console.log(e);
    }
  },
  validate: (payload) => {
    try {
      if (yaml.safeLoad(payload) !== null)
        return true;
    } catch (e) {
      return false
    }
  }
}
