const uglifycss = require('uglifycss');
const write = require('write');
const fs = require('fs-extra');




const uglified = uglifycss.processFiles(
    ['src/styles.css'], { maxLineLen: 500, expandVars: true,});

console.log(uglified);


write('dist/uglified.css', uglified);



