'use strict';

var gulp = require('gulp'),
    gjslint = require('gulp-gjslint'),
    paths = require('../gulp-helpers/paths');

/**
 * Lint project JS files.
 */
gulp.task('lint', function() {
    return gulp.src([
            './**/*.js',
            '!' + paths.build.directory + paths.build.filename,
            '!node_modules/**',
            '!' + paths.vendor + '/**',
            '!**/prettify.js'
        ])
        .pipe(gjslint())
        .pipe(gjslint.reporter('console'));
});
