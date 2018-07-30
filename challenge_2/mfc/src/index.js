const uglify = require('uglifycss');
const fs = require('fs');

var uglifiedCss = uglify.processFiles(['../src/styles.css']);

var outputDir = '../dist'

if (!fs.existsSync(outputDir)){
	fs.mkdirSync(outputDir);
}

fs.writeFile(`${outputDir}/minified.css`, uglifiedCss, function(err){
	if(err){
		console.log(err);
	} else {
		console.log(`The file was saved to ${outputDir}!`);
	}
});