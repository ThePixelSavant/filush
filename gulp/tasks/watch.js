var gulp  = require('gulp');

// Watcher
gulp.task('watch', function () {
	gulp.watch('./app/styl/**/*.styl', ['stylus', 'reload']);
	gulp.watch('./app/*.html', ['markup', 'reload']);
	gulp.watch(['./app/.htaccess', './app/favicon.ico', './app/robots.txt', './app/crossdomain.xml', './app/apple-touch-icon.png'], ['base', 'reload']);
	//gulp.watch(['./.tmp/*.html', './.tmp/js/*.js', './.tmp/css/*.css'], ['reload']);
});
