/*
  gulpfile.js
  ===========
*/

var gulp 	= require('gulp');
var sass 	= require('gulp-sass');
var scripts = require('gulp-uglify'); // js minify
var prefix 	= require('gulp-autoprefixer');


// compile SASS into CSS task
gulp.task ('sass', function() {
	return gulp.src('app/scss/**/*.scss') // glob gets any file with .scss
		.pipe(sass()) // Converts Sass to CSS with gulp-sass
		.on('error', console.error.bind(console)) //error handling
		.pipe(prefix('last 2 versions'))
		.pipe(gulp.dest('app/css'));
});


 //gulp minify js
gulp.task ('scripts', function() {
 	return gulp.src('app/js/**/*.js')
 		.pipe(scripts())
		.on('error', console.error.bind(console)) //error handling
		.pipe(gulp.dest('app/minjs'));
 });


// watch task 
// rebuilds everytime a change is made
gulp.task('watch', function() {
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/js/**/*.js', ['scripts']);
});
	

// default build task
gulp.task('default', ['sass', 'scripts', 'watch']);

