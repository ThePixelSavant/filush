var gulp  = require('gulp');

// Watcher
gulp.task('watch', ['clean'], function () {
	gulp.watch('./app/styl/**/*.styl', ['main-css']);
	gulp.watch(['./app/img/*/**.*', './app/.htaccess', './app/favicon.ico', './app/robots.txt', './app/crossdomain.xml', './app/apple-touch-icon.png'], ['copy']);
	gulp.watch(['./.tmp/*.html', './.tmp/js/*.js', './.tmp/css/*.css'], ['reload']);
});
