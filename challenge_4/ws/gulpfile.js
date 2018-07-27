const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const stylus = require('gulp-stylus');
const refresh = require('gulp-refresh');

gulp.task('default', ['styles', 'html']);

gulp.task('styles', () => {
    return gulp.src('./src/stylus/screen.styl')
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(refresh());
});

gulp.task('html', () => {
    return gulp.src('./src/views/index.html')
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', () => {
    refresh.listen();
	gulp.watch('./src/stylus/screen.styl', ['styles']);
});