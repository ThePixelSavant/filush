var gulp = require('gulp');
// Copy markup files
gulp.task('markup', function () {
	gulp.src([
		'./app/index.html',
		'./app/style-guide.html'
  	])
		.pipe(gulp.dest('./.tmp'));
});