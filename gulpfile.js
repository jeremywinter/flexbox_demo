/*
  gulpfile.js
  ===========
*/

var gulp 					= require('gulp');
var sass 					= require('gulp-sass');
var browserSync 	= require('browserSync').create();


// compile SASS into CSS task
gulp.task ('sass', function() {
	return gulp.src('app/scss/**/*.scss') // glob gets any file with .scss
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({ //Browser Sync injects new CSS styles
	      stream: true
	    }))
});


// gulp watch task
gulp.task ('watch', function(){
	gulp.task('watch', ['browserSync', 'sass'], function (){
	  gulp.watch('app/scss/**/*.scss', ['sass']); 
	  // Other watchers
	});
});
	

// browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});



















