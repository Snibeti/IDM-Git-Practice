const fs = require('fs');
const csso =  require('csso');

const src = 'src/styles.css';
const fn = 'styles.min.js';
const code = fs.readFileSync(src, 'utf8');
const result = csso.minify(code).css;

if (result.error) {
  console.log(result.error);
} else {
  console.log('');
  console.log('Result Code:');
  // console.log(result);
  console.log('');
  console.log('Generating file...');
  const distDir = './dist';
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
  }

  fs.writeFile(`${distDir}/${fn}`, result, 'utf8', err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Minified file ${distDir}/${fn} [built]`);
    console.log('');
  });
}