{
    const MinifyCSS = require('uglifycss');
    const fs = require('fs');
    const src = 'src/styles.css';
    const buildDir = 'dist';

    const result = MinifyCSS.processFiles([src]);

    if (result.error) {
        console.log(result.error);
        return;
    }

    if (!fs.existsSync(buildDir)) {
        fs.mkdirSync(buildDir);
    }

    fs.writeFile(`${buildDir}/minified.css`, result, 'utf8', err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`Minified file has been saved to ${buildDir}`);
    });
}   