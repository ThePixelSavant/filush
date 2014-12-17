var gulp = require('gulp'),
		handlebars = require('gulp-compile-handlebars'),
		stylus = require('gulp-stylus'),
		rename = require('gulp-rename'),
		data = require('gulp-data');

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
					loadStyles: function(){
							return gulp.src('./app/styl/partials/_preload-styles.styl')
								.pipe(stylus())
								.pipe(gulp.dest(target));
					}
        }
    }

    return gulp.src('./app/layout/content/index.handlebars')
        .pipe(handlebars(templateData, options))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./.tmp'));
});