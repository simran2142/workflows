var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee'),
    concat = require('gulp-concat');
var coffeeSources = ['components/coffee/tagline.coffee']
var jsSources = ['components/script/rclick.js',
    'components/script/rclick.js',
    'components/script/pixgrids.js',
    'components/script/tagline.js',
    'components/script/template.js'
];

gulp.task('coffee', function() {
    gulp.src(coffeeSources)
        .pipe(coffee({ bare: true })
            .on('error', gutil.log))
        .pipe(gulp.dest('components/script/'))
});

gulp.task('js', function(){
	gulp.src(jsSources)
		.pipe(concat('script.js'))
		.pipe(gulp.dest('builds/development/js/'))
});