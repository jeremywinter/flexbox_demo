/*
  gulpfile.js
  ===========
*/

var gulp = require('gulp');
var sass = require('gulp-sass');


/*
gulp.task('task-name', function() {
	//gulp task here

});
*/


// compile SASS into CSS

gulp.task ('sass', function() {
	return gulp.src('app/scss/**/*.scss') // glob gets any file with .scss
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
});


// gulp watch
gulp.task ('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass']);

});





















