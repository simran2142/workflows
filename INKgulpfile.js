'use stict';
var gulp = require( 'gulp' );
var sass = require('gulp-sass');
var sourcemaps = require( 'gulp-sourcemaps' );
var watch = require( 'gulp-watch' );

gulp.task( 'sass', function () {
	gulp.src('scss/**/*.scss')
		.pipe( sourcemaps.init())
		.pipe( sass().on( 'error', sass.logError ) )
		.pipe( gulp.dest( './assets/css' ) )
		.pipe( sourcemaps.write('./') );
});

gulp.task( 'watch', function () {
    gulp.watch( 'scss/**/*.scss', ['sass'] );
} );

gulp.task( 'default', [ 'sass', 'watch' ] );
