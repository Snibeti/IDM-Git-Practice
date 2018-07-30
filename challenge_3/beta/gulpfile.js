const gulp = require('gulp');
const stylus = require('gulp-stylus');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('css', () => {
  return gulp.src('src/stylus/screen.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('html', () => {
  return gulp.src('src/views/index.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['css','html']);
