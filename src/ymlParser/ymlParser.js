import fs from 'fs';
import yaml from 'js-yaml';

// Get document, or throw exception on error
try {
  var doc = yaml.safeLoad(fs.readFileSync('src/ymlParser/.deity.yml', 'utf8'));
  console.log(doc);
} catch (e) {
  console.log(e);
}
