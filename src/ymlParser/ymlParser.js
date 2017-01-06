import fs from 'fs';
import yaml from 'js-yaml';

export default (filePath) => {
  try {
    var doc = yaml.safeLoad(fs.readFileSync(filePath, 'utf8'));
    return doc;
  } catch (e) {
    console.log(e);
  }
};
