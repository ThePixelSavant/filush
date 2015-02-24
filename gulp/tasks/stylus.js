var gulp = require('gulp'),
	nib = require('nib'),
	stylus = require('gulp-stylus'),
	sourcemaps = require('gulp-sourcemaps');


// Compile main.styl file
gulp.task('stylus', function () {
	gulp.src([
			'./app/styl/main.styl',
			'./app/styl/404.styl',
			'./app/styl/style-guide.styl'
		])
		.pipe(stylus({
			'include css': true,
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
		.pipe(gulp.dest('./dist/css'));
});