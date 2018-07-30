const fs = require('fs');
const CleanCSS = require('clean-css');

const src = 'src/styles.css';
const fn = 'styles.css';
const input = fs.readFileSync(src, 'utf8');
const result = new CleanCSS().minify(input);

if (result.error) {
  console.log(result.error);
} else {
  console.log('');
  console.log('Result Code:');
  console.log(result.styles);
  console.log('');
  console.log('Generating file...');
  const buildDir = './dist';
  if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir);
  }

  fs.writeFile(`${buildDir}/${fn}`, result.styles, 'utf8', err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Minified file ${buildDir}/${fn} [built]`);
    console.log('');
  });
}
