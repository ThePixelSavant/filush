var gulp = require('gulp'),
	source = require('vinyl-source-stream'),
	streamify = require('gulp-streamify'),
	browserify = require('browserify'),
	uglify = require('gulp-uglify');

// Browserfy JS packages
// using vinyl-source-stream:
gulp.task('browserify', function() {
  var bundleStream = browserify('./src/index.js').bundle()

  bundleStream
    .pipe(source('./src/index.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('./.tmp/js/main.js'))
});