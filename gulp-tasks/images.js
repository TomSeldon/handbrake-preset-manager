'use strict';

var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    paths = require('../gulp-helpers/paths');

gulp.task('images', function() {
    return gulp.src(paths.images)
        .pipe(imagemin())
        .pipe(gulp.dest('./build/img'));
});
