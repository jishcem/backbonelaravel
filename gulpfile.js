var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('default', function(){
	gulp.src([
				'./vendor/js/jquery/dist/jquery.js',
				'./vendor/js/underscore/underscore.js', 
				'./vendor/js/backbone/backbone.js'				
			])
    		.pipe(concat('all.js'))
    		// .pipe(uglify())
    		.pipe(gulp.dest('./public/packages/js/'));
});