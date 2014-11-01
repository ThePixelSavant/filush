var gulp = require('gulp'),
	ignore = require('gulp-ignore'),
	rimraf = require('gulp-rimraf'),
	concat = require('gulp-concat'),
	modernizr = require('gulp-modulizr'),
	stylus = require('gulp-stylus'),
	sourcemaps = require('gulp-sourcemaps'),
	mainBowerFiles = require('main-bower-files'),
	filter = require('gulp-filter'),
	connect = require('gulp-connect');

// Clean server of old files
gulp.task('clean', function () {
	return gulp.src('.tmp/**', {
			read: false
		}) // much faster
		.pipe(rimraf());
});

// Build Modernizr
gulp.task('custom-modernizr', function () {
	return gulp.src('./bower_components/modernizr/modernizr.js')
		.pipe(modernizr([
                'cssclasses',
                'svg'
                ]))
		.pipe(concat('modernizr.js'))
		.pipe(gulp.dest('./.tmp/js'));
});

// Copy images and site root files
gulp.task('copy', function () {
	gulp.src([
      './app/img',
			'./app/.htaccess',
      './app/favicon.ico',
			'./app/robots.txt',
			'./app/crossdomain.xml',
			'./app/apple-touch-icon.png',
			'./bower_components/fontawesome/fonts'
  ])
		.pipe(gulp.dest('.tmp'));
});

// Process bower packages
var filterByExtension = function (extension) {
	return filter(function (file) {
		return file.path.match(new RegExp('.' + extension + '$'));
	});
};
gulp.task('package', function () {
	var mainFiles = mainBowerFiles();

	if (!mainFiles.length) {
		// No main files found. Skipping....
		return;
	}

	var jsFilter = filterByExtension('js'),
			cssFilter = filterByExtension('css');
	
	//console.log(mainFiles);

	return gulp.src(mainFiles)
		.pipe(jsFilter)
		.pipe(concat('fjs.js'))
		.pipe(gulp.dest('./.tmp/js'))
		.pipe(jsFilter.restore())
		.pipe(cssFilter)
		.pipe(concat('fjs.css'))
		.pipe(gulp.dest('./.tmp/css'));
});

// Render main.styl file
gulp.task('main-css', function () {
	gulp.src('./app/styl/main.styl')
		.pipe(stylus({
			/*use: [nib()],*/
			import: ['../../bower_components/normalize.styl/normalize.styl'],
			sourcemap: {
				inline: true,
				sourceRoot: '.',
				basePath: 'app/css'
			}
		}))
		.pipe(sourcemaps.init({
			loadMaps: true
		}))
		.pipe(sourcemaps.write('.', {
			includeConent: false,
			sourceRoot: '.'
		}))
		.pipe(gulp.dest('./.tmp/css'));
});

// Watcher reload
gulp.task('reload', function () {
	gulp.src(['./.tmp/*.html'])
		.pipe(connect.reload());
});

// Web server
gulp.task('connect', function () {
	connect.server({
		root: './.tmp',
		port: '9000',
		livereload: true
	});
});

// Watcher
gulp.task('watch', function () {
	gulp.watch('./app/styl/**/*.styl', ['main-css']);
	gulp.watch(['./app/img/*/**.*', './app/.htaccess', './app/favicon.ico', './app/robots.txt', './app/crossdomain.xml', './app/apple-touch-icon.png'], ['copy']);
	gulp.watch(['./.tmp/*.html', './.tmp/js/*.js', './.tmp/css/*.css'], ['reload']);
});

gulp.task('default', ['copy', 'custom-modernizr', 'package', 'main-css', 'connect', 'watch']);