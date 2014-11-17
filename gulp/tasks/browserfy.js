var gulp = require('gulp'),
	source = require('vinyl-source-stream'),
	streamify = require('gulp-streamify'),
	browserify = require('browserify'),
	uglify = require('gulp-uglify');

// Browserfy JS packages
// using vinyl-source-stream:
gulp.task('browserify', ['clean'], function() {
  var bundleStream = browserify('./app/js/app.js').bundle()

  bundleStream
    .pipe(source('main.js'))
    //.pipe(streamify(uglify()))
    .pipe(gulp.dest('./.tmp/js'))
});