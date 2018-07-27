const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const stylus = require('gulp-stylus');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

// default task that will run all available tasks
gulp.task('default', ['styles', 'html', 'watch']);

// task that will compile stylus file and refresh browser
gulp.task('styles', () => {
    return gulp.src('./src/stylus/screen.styl')
        .pipe(sourcemaps.init())    
        .pipe(stylus())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(reload({ stream:true }));
});

// task that will copy html to dist/
gulp.task('html', () => {
    return gulp.src('./src/views/index.html')
        .pipe(gulp.dest('./dist/'));
});

// task that will watch for changes made to stylus
gulp.task('watch', ['styles','html'], function() {

    browserSync({
        server: {
          baseDir: 'dist'
        }
      });
    

    gulp.watch('src/stylus/screen.styl', ['styles']);
});