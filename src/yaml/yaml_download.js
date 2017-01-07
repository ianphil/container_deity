var fetch = require('node-fetch');

module.exports = (filepath, callback) => {
  fetch(filepath)
    .then(function(res) {
        return res.text();
    }).then(function(body) {
        callback(body);
    });
};
