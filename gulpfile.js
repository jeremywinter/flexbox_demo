/*
  gulpfile.js
  ===========
*/

var gulp 					= require('gulp');
var sass 					= require('gulp-sass');
var browserSync 	= require('browser-sync').create();


// compile SASS into CSS task
gulp.task ('sass', function() {
	return gulp.src('app/scss/**/*.scss') // glob gets any file with .scss
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({ //Browser Sync injects new CSS styles
      stream: true
    }))
});


gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app/index.html'
    },
  })
});


// gulp watch task
gulp.task('watch', ['browserSync', 'sass'], function() {
  gulp.watch('app/scss/**/*.scss', ['sass']); 

});
	



















