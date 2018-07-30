const fs = require('fs');
const uglifycss = require('uglifycss');
const fn = 'styles.min.css';
const result = uglifycss.processFiles(['./src/styles.css']);

if (result.error) {
  console.log(result.error);
} else {
  console.log('Generating file...');
  const buildDir = './dist';
  if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir);
  }

  fs.writeFile(`${buildDir}/${fn}`, result, 'utf8', err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Minified file ${buildDir}/${fn} [built]`);
    console.log('');
  });
}
