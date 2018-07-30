const fs = require('fs');
const uglifycss = require('uglifycss');

//const src = './src/styles.css';
const fn = 'styles.min.js';
//const code = fs.readFileSync(src, 'utf8');
const result = uglifycss.processFiles(['./src/styles.css']);

if (result.error) {
  console.log(result.error);
} else {
  //console.log('');
  //console.log('Result Code:');
  //console.log(result.code);
  //console.log('');
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