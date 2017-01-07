/* This script generates mock data for local development.
   This way you don't have to point to an actual API,
   but you can enjoy realistic, but randomized data,
   and rapid page loads due to local, static data.
 */

var jsf = require('json-schema-faker');
var schema = require('./mock_data_schema').schema;
var fs = require('fs');
var chalk = require('chalk');

var json = JSON.stringify(jsf(schema));

fs.writeFile("./src/fakeApi/db.json", json, function (err) {
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green("Mock data generated."));
  }
});
