/*
  gulpfile.js
  ===========
*/

var gulp 	= require('gulp');
var sass 	= require('gulp-sass');
var uglify 	= require('gulp-uglify'); // js minify
var prefix 	= require('gulp-autoprefixer');


// function errorLog(error) {
// 	console.error.bind(error);
// 	this.emit('end');
// }


// compile SASS into CSS task
gulp.task ('sass', function() {
	return gulp.src('app/scss/**/*.scss') // glob gets any file with .scss
		.pipe(sass()) // Converts Sass to CSS with gulp-sass
		//on('error', errorLog)
		.pipe(prefix('last 2 versions'))
		.pipe(gulp.dest('app/css'));
});


 //gulp minify js
gulp.task ('uglify', function() {
 	return gulp.src('app/js/**/*.js')
 		.pipe(uglify())
 		//on('error', errorLog)
		.pipe(gulp.dest('app/minjs'));
 });


// watch task 
// rebuilds everytime a change is made
gulp.task('watch', function() {
	gulp.watch('app/scss/**/*.scss', ['sass']);
  	gulp.watch('app/js/**/*.js', ['uglify']);
});
	

// default build task
gulp.task('default', ['sass', 'uglify', 'watch']);
































