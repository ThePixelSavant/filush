var gulp  = require('gulp');

// Watcher
gulp.task('watch', function () {
	gulp.watch('./app/styl/**/*.styl', ['stylus']);
	gulp.watch('./app/layout/**/*.hbs', ['compileHBS']);
	gulp.watch('./app/js/**/*.js', ['browserify']);
	//gulp.watch(['./app/.htaccess', './app/favicon.ico', './app/robots.txt', './app/crossdomain.xml', './app/apple-touch-icon.png'], ['base', 'reload']);
	gulp.watch(['./dist/*.html', './dist/js/*.js', './dist/css/*.css'], ['reload']);
});
