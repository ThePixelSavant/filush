var gulp = require('gulp');

//gulp.task('default', ['build']);
gulp.task('build', ['base', 'copyFonts', 'modernizr', 'compileHBS', 'stylus', 'browserify']);
gulp.task('dev', ['build', 'connect', 'watch']);