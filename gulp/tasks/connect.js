var gulp = require('gulp'),
	connect = require('gulp-connect');

// Watcher reload
gulp.task('reload', function () {
	gulp.src(['./dist/*.html'])
		.pipe(connect.reload());
});

// Web server
gulp.task('connect', function () {
	connect.server({
		root: './dist',
		port: '9000',
		livereload: true
	});
});