var gulp = require('gulp'),
	connect = require('gulp-connect');

// Watcher reload
gulp.task('reload', ['browserify'], function () {
	gulp.src(['./.tmp/*.html'])
		.pipe(connect.reload());
});

// Web server
gulp.task('connect', ['browserify'], function () {
	connect.server({
		root: './.tmp',
		port: '9000',
		livereload: true
	});
});