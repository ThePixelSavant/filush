var gulp = require('gulp'),
	handlebars = require('gulp-compile-handlebars'),
	stylus = require('gulp-stylus'),
	data = require('gulp-data'),
	rename = require('gulp-rename'),
	gutil = require('gulp-util');

gulp.task('compileHBS', function () {
	var templateData = data(function(file) {
		return require('./app/appData.json');
  }),
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
		.pipe(handlebars(templateData, options))
		.pipe(rename(
			function(path) {
				path.extname = '.html';
			})
		)
		.pipe(gulp.dest('./dist'));
});