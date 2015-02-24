var gulp = require('gulp');
// Copy images and site root files
gulp.task('copyFonts', function () {
	gulp.src([
		'./src/fontawesome/fonts/*.*'
  	], {
		'base': './src/fontawesome/fonts/'
	})
		.pipe(gulp.dest('./dist/fonts/'));
});