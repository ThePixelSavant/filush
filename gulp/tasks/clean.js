var gulp = require('gulp'),
	del = require('del');

gulp.task('clean', function (cb) {
	//  del(['**'], {cwd: 'app'}, cb)
	del(['./.tmp/**','./dist/**'], cb)
})