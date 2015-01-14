var gulp = require('gulp'),
	handlebars = require('gulp-compile-handlebars'),
	stylus = require('gulp-stylus'),
	rename = require('gulp-rename'),
	gutil = require('gulp-util');

gulp.task('compileHBS', function () {
	var templateData = {
		title: 'FJS Sample',
		description: 'Here is a sample description'
	},
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

	return gulp.src('./app/layout/content/index.hbs')
		.pipe(handlebars(templateData, options))
		.pipe(rename('index.html'))
		.pipe(gulp.dest('./dist'));
});