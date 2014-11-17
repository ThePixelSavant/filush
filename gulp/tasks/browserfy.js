var gulp = require('gulp'),
	source = require('vinyl-source-stream'),
	streamify = require('gulp-streamify'),
	browserify = require('browserify'),
	beautify = require('gulp-beautify'),
	uglify = require('gulp-uglify');

// Browserfy JS packages
// using vinyl-source-stream:
gulp.task('browserify', function() {
  var bundleStream = browserify('./app/js/app.js').bundle()

  bundleStream
    .pipe(source('main.js'))
    //.pipe(streamify(uglify()))
  	.pipe(streamify(beautify()))
    .pipe(gulp.dest('./.tmp/js'))
});