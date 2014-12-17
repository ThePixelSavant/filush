var gulp = require('gulp');

//gulp.task('default', ['build']);
gulp.task('build', ['base', 'compileHBS', 'stylus', 'browserify']);
gulp.task('dev', ['build', 'connect', 'watch']);