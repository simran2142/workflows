var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    concat = require('gulp-concat'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass');
var coffeeSources = ['components/coffee/tagline.coffee']
var jsSources = ['components/script/rclick.js',
    'components/script/rclick.js',
    'components/script/pixgrids.js',
    'components/script/tagline.js',
    'components/script/template.js'
];
var sassSources = ['components/sass/style.scss'];
gulp.task('coffee', function() {
    gulp.src(coffeeSources)
        .pipe(coffee({ bare: true })
            .on('error', gutil.log))
        .pipe(gulp.dest('components/script/'))
});

gulp.task('js', function() {
    gulp.src(jsSources)
        .pipe(concat('script.js'))
        .pipe(browserify())
        .pipe(gulp.dest('builds/development/js/'))
});
gulp.task('compass', function() {
    gulp.src(sassSources)
        .pipe(compass({
        	sass: 'components/sass/',
        	image: 'builds/development/images/',
        	style: 'expanded'
        }))
        .on('error', gutil.log)
        .pipe(gulp.dest('builds/development/css/'))
});
gulp.task('default', ['coffee', 'js', 'compass']);
