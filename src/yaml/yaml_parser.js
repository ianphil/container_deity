var yaml = require('js-yaml');

module.exports = {
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
};
