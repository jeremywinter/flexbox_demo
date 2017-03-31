/*
  gulpfile.js
  ===========
*/

var gulp 		= require('gulp');
var sass 		= require('gulp-sass');
var prefix 	= require('gulp-autoprefixer');


// compile SASS into CSS task
gulp.task ('sass', function() {
	return gulp.src('app/scss/**/*.scss') // glob gets any file with .scss
		.pipe(sass()) // Converts Sass to CSS with gulp-sass
		.pipe(prefix('last 2 versions'))
		.pipe(gulp.dest('app/css'));
});


// watch task 
// rebuilds everytime a change is made
gulp.task('watch', function(){
	gulp.watch('app/scss/**/*.scss', ['sass']);
});
	

// default build task
gulp.task('default', ['sass', 'watch']);
































