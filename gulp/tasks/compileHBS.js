var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');

gulp.task('compileHBS', function () {
    var templateData = {
        title: 'FJS Sample',
				description: 'Here is a sample description',
				loadStyles: 'h1 {text-align:center;}'
    },
    options = {
        ignorePartials: false, //ignores the unknown footer2 partial in the handlebars template, defaults to false
        partials : {
            //footer : '<footer>the end</footer>'
        },
        batch : ['./app/layout/partials'],
        helpers : {
            capitals : function(str){
                return str.toUpperCase();
            }
        }
    }

    return gulp.src('./app/layout/content/index.handlebars')
        .pipe(handlebars(templateData, options))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./.tmp'));
});