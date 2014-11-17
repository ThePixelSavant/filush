var gulp  = require('gulp');

// Watcher
gulp.task('watch', ['connect'], function () {
	gulp.watch('./app/styl/**/*.styl', ['main-css']);
	gulp.watch(['./app/*.html'], ['markup']);
	gulp.watch(['./app/img/*/**.*', './app/.htaccess', './app/favicon.ico', './app/robots.txt', './app/crossdomain.xml', './app/apple-touch-icon.png'], ['copy']);
	gulp.watch(['./.tmp/*.html', './.tmp/js/*.js', './.tmp/css/*.css'], ['reload']);
});
