var gulp = require('gulp'),
	connect = require('gulp-connect');

// Watcher reload
gulp.task('reload', function () {
	gulp.src(['./.tmp/*.html'])
		.pipe(connect.reload());
});

// Web server
gulp.task('connect', function () {
	connect.server({
		root: './.tmp',
		port: '9000',
		livereload: true
	});
});