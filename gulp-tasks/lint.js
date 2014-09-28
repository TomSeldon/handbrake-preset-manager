'use strict';

var gulp = require('gulp'),
    gjslint = require('gulp-gjslint'),
    paths = require('../gulp-helpers/paths'),
    src;

src = [
    './**/*.js',
    '!' + paths.build.directory + paths.build.filename,
    '!node_modules/**',
    '!' + paths.vendor + '/**',
    '!**/prettify.js',
    '!jsdoc/**',
    '!test/unit/fixtures/**'
];

/**
 * Lint project JS files.
 */
gulp.task('lint', function() {
    return gulp.src(src)
        .pipe(gjslint())
        .pipe(gjslint.reporter('console'));
});


/**
 * Lint project JS files in a CI environment.
 */
gulp.task('lint:ci', function() {
    return gulp.src(src)
        .pipe(gjslint())
        .pipe(gjslint.reporter('console'))
        .pipe(gjslint.reporter('fail'));
});
