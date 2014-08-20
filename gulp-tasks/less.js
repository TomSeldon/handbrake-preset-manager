'use strict';

var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    paths = require('../gulp-helpers/paths');

gulp.task('less', function() {
    var lessConfig;

    lessConfig = {
        compress: true
    };

    gulp.src(paths.less)
        .pipe(concat('app.css'))
        .pipe(less(lessConfig))
        .pipe(gulp.dest('./build/css'));
});
