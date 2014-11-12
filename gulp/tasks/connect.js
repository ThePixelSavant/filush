var gulp = require('gulp'),
	connect = require('gulp-connect');

// Watcher reload
gulp.task('reload', ['clean'], function () {
	gulp.src(['./.tmp/*.html'])
		.pipe(connect.reload());
});

// Web server
gulp.task('connect', ['clean'], function () {
	connect.server({
		root: './.tmp',
		port: '9000',
		livereload: true
	});
});