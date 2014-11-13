var gulp = require('gulp');

gulp.task('default', ['clean', 'copy', 'markup', 'main-css', 'browserify', 'connect', 'watch']);