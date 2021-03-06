var gulp = require('gulp');
// Copy images and site root files
gulp.task('base', function () {
	gulp.src([
		'./app/img/**',
		'./app/.htaccess',
		'./app/favicon.ico',
		'./app/robots.txt',
		'./app/crossdomain.xml',
		'./app/apple-touch-icon.png'
  	], {
		base: './app/'
	})
		.pipe(gulp.dest('./dist'));
});