var gulp = require('gulp');
// Copy images and site root files
gulp.task('copy', ['clean'], function () {
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