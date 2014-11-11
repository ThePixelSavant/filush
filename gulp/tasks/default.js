var gulp = require('gulp'),
	rimraf = require('gulp-rimraf');
		
// Clean server of old files
gulp.task('clean', function () {
	return gulp.src('./.tmp/**', {
			read: false
		}) // much faster
		.pipe(rimraf());
});

// Copy images and site root files
gulp.task('copy', function () {
	gulp.src([
		'./app/index.html',
		'./app/.htaccess',
		'./app/favicon.ico',
		'./app/robots.txt',
		'./app/crossdomain.xml',
		'./app/apple-touch-icon.png'
  	])
		.pipe(gulp.dest('./.tmp'));
});

gulp.task('default', ['copy', 'main-css', 'connect', 'watch']);