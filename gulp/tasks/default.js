var gulp = require('gulp');

//gulp.task('default', ['build']);
gulp.task('build', ['base', 'markup', 'stylus', 'browserify']);
gulp.task('dev', ['build', 'connect', 'watch']);