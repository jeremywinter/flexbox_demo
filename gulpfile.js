/*
  gulpfile.js
  ===========
*/

var gulp 		= require('gulp');
var sass 		= require('gulp-sass');
//var uglify 	= require('gulp-uglify'); // js minify
//var plumber = require('gulp-plumber'); // error detection
//var prefix 	= require('gulp-autoprefixer');


// function errorLog(error) {
// 	console.error.bind(error);
// 	this.emit('end');
// }


// compile SASS into CSS task
gulp.task ('sass', function() {
	return gulp.src('app/scss/**/*.scss') // glob gets any file with .scss
		//.pipe(plumber())
		.pipe(sass()) // Converts Sass to CSS with gulp-sass
		//on('error', errorLog)
		//.pipe(prefix('last 2 versions'))
		.pipe(gulp.dest('app/css'));
});


// gulp minify js
gulp.task ('scripts', function() {
	return gulp.scr('app/js/*.js')
		//.pipe(plumber())
		.pipe.(uglify())
		//on('error', errorLog)
		.pipe.(gulp.dest('app/minjs'));
});


// watch task 
// rebuilds everytime a change is made
gulp.task('watch', function(){
	gulp.watch('app/scss/**/*.scss', ['sass']);
  //gulp.watch('app/js/**/*/js', ['scripts']);
});
	

// default build task
gulp.task('default', ['scripts', 'sass', 'watch']);
































