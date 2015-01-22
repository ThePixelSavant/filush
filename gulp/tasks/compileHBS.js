var gulp = require('gulp'),
	handlebars = require('gulp-compile-handlebars'),
	stylus = require('gulp-stylus'),
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
			}
		}
	}
	
		return gulp.src('./app/layout/content/*.hbs')
		.pipe(tap(function (file,t) {
				//console.log(path.basename(file.path, '.hbs'));
				templateData.currentPage = path.basename(file.path, '.hbs');
				templateData.currentPage.styleSheets = ''
				//console.log(templateData.currentPage);
			}))
		.pipe(handlebars(templateData, options))
		.pipe(rename(
			function(path) {
				path.extname = '.html';
			})
		)
		.pipe(gulp.dest('./dist'));
});