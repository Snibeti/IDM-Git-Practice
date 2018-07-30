const fs = require('fs');
var uglifycss = require('uglifycss');

const src = 'src/styles.css';
const fn = 'main.min.css';
 
var uglified = uglifycss.processFiles(
    [ src]
);

fs.writeFile('dist/'+fn, uglified, (err) => {
    if (err) throw err;
    console.log('YOU DID IT!!!!!!!!?????!!!!!!~~~');
  });