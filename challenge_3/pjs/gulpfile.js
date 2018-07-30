const del = require('del');
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const stylus = require('gulp-stylus');

gulp.task('stylus', () => {
	del(['./dist/css/*']);

	let compression = false;
	return gulp.src('./src/stylus/screen.styl')
		.pipe(sourcemaps.init())
		.pipe(stylus({
			compress: compression
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./dist/css/'));
});

gulp.task('views', () => {
	return gulp.src('./src/views/**/*.html')
		.pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['stylus', 'views']);

gulp.task('watch', () => {
	gulp.watch('./src/stylus/**/*.styl', ['stylus']);
	gulp.watch('./src/views/**/*.html', ['views']);
});