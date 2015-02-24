var gulp = require('gulp'),
		modernizr = require('gulp-modernizr');

gulp.task('modernizr', function() {
  gulp.src([
		'./app/js/modernizr.js'
  	], {
		base: './app/js'
	})
		.pipe(gulp.dest('./dist/js'));
});