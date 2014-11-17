var gulp = require('gulp'),
	nib = require('nib'),
	stylus = require('gulp-stylus'),
	sourcemaps = require('gulp-sourcemaps');


// Compile main.styl file
gulp.task('stylus', function () {
	gulp.src(['./app/styl/main.styl','./app/styl/style-guide.styl'])
		.pipe(stylus({
			use: [nib()],
			import: ['nib'],
			sourcemap: {
				inline: true,
				sourceRoot: '.'
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