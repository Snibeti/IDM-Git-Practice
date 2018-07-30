// include the required packages.
const gulp = require('gulp');
const stylus = require('gulp-stylus');
const sourcemaps = require('gulp-sourcemaps');

// Get one .styl file and render
gulp.task('style', function () {
  return gulp.src('src/stylus/screen.styl')
    .pipe(stylus())
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('copy', function () {
  return gulp.src('src/views/index.html')
      .pipe(gulp.dest('./dist/'));
});


// Default gulp task to run
gulp.task('default', ['style','copy']);
