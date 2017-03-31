/*
  gulpfile.js
  ===========
*/

var gulp 				= require('gulp');
var sass 				= require('gulp-sass');
var browserSync = require('browser-sync');


// compile SASS into CSS task
gulp.task ('sass', function() {
	return gulp.src('app/scss/**/*.scss') // glob gets any file with .scss
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
		
});


// browserSync watch tast
gulp.task ('sass-watch', ['sass'], browserSync.reload);


// gulp watch task
gulp.task('watch', function(){
	
	browserSync({
		server: {
				baseDir: 'app/'
		}
	});

gulp.watch('app/scss/**/*.scss', ['sass-watch']); 

});
	



















