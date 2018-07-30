// include the required packages.
const gulp = require('gulp');
const stylus = require('gulp-stylus');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');

// Get one .styl file and render
gulp.task('style', function () {
  return gulp.src('src/stylus/screen.styl')
    .pipe(stylus())
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.reload({ stream : true }));
});

gulp.task('copy', function () {
  return gulp.src('src/views/index.html')
      .pipe(gulp.dest('./dist/'));
});

// Default gulp task to run
gulp.task('default', ['style','copy', 'watch']);

//Gulp watch task
gulp.task('watch', function(){
	browserSync({
    server: { baseDir: 'dist' }
  });
	gulp.watch('src/**/*.*', ['style']);
})
