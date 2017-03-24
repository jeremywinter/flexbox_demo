/*
  gulpfile.js
  ===========
*/

var gulp 					= require('gulp');
var sass 					= require('gulp-sass');


// compile SASS into CSS task
gulp.task ('sass', function() {
	return gulp.src('app/scss/**/*.scss') // glob gets any file with .scss
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
		
});


// gulp watch task
gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass']); 

});
	



















