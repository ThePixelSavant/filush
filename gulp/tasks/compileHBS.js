var gulp = require('gulp'),
	handlebars = require('gulp-compile-handlebars'),
	stylus = require('gulp-stylus'),
	nib = require('nib'),
	fs = require('fs'),
	path = require('path'),
	rename = require('gulp-rename'),
	tap = require('gulp-tap'),
	gutil = require('gulp-util');

var getAppData = function () {
  return JSON.parse(fs.readFileSync('./app/appData.json', 'utf8'));
};

gulp.task('compileHBS', function () {
	var templateData = getAppData(),
	options = {
		ignorePartials: false, //ignores the unknown footer2 partial in the handlebars template, defaults to false
		partials : {
			//footer : '<footer>the end</footer>'
		},
		batch : ['./app/layout/partials'],
		helpers : {
			year : function(){
				return new Date().getFullYear();
			},
			parseJSON : function(data, options) {
				return options.fn(JSON.parse(data));
			},
			/*loadingStyles : function(){
				gulp.src('./app/styl/preload-styles.styl')
				.pipe(stylus({
						use: [nib()],
						import: ['nib']
					}))
				.pipe(tap(function (file,t) {
					console.log(file.toString('utf8'));
					//return file.toString();
				}));
			}*/
		}
	}
	
	return gulp.src('./app/layout/content/*.hbs')
	.pipe(tap(function (file,t) {
			var currentPageName = path.basename(file.path, '.hbs');
			templateData.currentStyleSheets = templateData.app.pages[currentPageName].styleSheets;
			templateData.currentTitle = templateData.app.pages[currentPageName].title;
			templateData.currentDescription = templateData.app.pages[currentPageName].description;
		}))
	.pipe(handlebars(templateData, options))
	.pipe(rename(
		function(path) {
			path.extname = '.html';
		})
	)
	.pipe(gulp.dest('./dist'));
});