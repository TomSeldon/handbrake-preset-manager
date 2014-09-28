'use strict';

var gulp = require('gulp'),
    chalk = require('chalk'),
    expand = require('glob-expand'),
    concat = require('gulp-concat'),
    closure = require('closure-compiler-stream'),
    paths = require('../gulp-helpers/paths');

gulp.task('compile', function() {
    var closureOptions, src;

    closureOptions = require(__dirname + '/../closure.conf');

    src = ['bower_components/closure-library/closure/goog/base.js']
        .concat(paths.app)
        .concat(paths.states)
        .concat(paths.components);

    return gulp.src(src)
        .pipe(closure(closureOptions))
        .pipe(gulp.dest(paths.build.directory))
        .on('end', function() {
            console.log(
                chalk.green.bold('Application compiled successfully')
            );
        });
});
