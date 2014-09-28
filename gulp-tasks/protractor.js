'use strict';

/**
 * @fileoverview Gulp task to run end-to-end tests
 * using Protractor (https://github.com/angular/protractor).
 */

var gulp = require('gulp'),
    gulpProtractor = require('gulp-protractor'),
    protractor = gulpProtractor.protractor,
    webdriverUpdate = gulpProtractor.webdriver_update,
    webdriver_standalone = require('gulp-protractor').webdriver_standalone,
    files;

files = [
    'features/**/*.feature'
];

/**
 * Run end-to-end tests using Protractor, with
 * the config file located at `/test/e2e/protractor.conf.js`.
 *
 * Listen for error event, and throw an exception if
 * the event listener is fired.
 */
gulp.task('protractor', ['webdriver-update'], function() {
    return gulp.src(files)
        // Run Protractor using config file specified
        .pipe(protractor({
            configFile: './test/e2e/protractor.standalone.conf.js'
        }));
});

/**
 * Run end-to-end tests using Protractor, with
 * the config file located at `/test/e2e/selenium.conf.js`.
 *
 * Listen for error event, and throw an exception if
 * the event listener is fired.
 */
gulp.task('protractor:selenium', ['webdriver-update'], function() {
    return gulp.src(files)
        // Run Protractor using config file specified
        .pipe(protractor({
            configFile: './test/e2e/protractor.selenium.conf.js'
        }));
});

/**
 * Run end-to-end tests using Protractor, with
 * the config file located at `/test/e2e/selenium.conf.js`.
 *
 * Listen for error event, and throw an exception if
 * the event listener is fired.
 */
gulp.task('protractor:saucelabs', function() {
    return gulp.src(files)
        // Run Protractor using config file specified
        .pipe(protractor({
            configFile: './test/e2e/protractor.saucelabs.conf.js'
        }));
});

/**
 * Run end-to-end tests using Protractor, with
 * the config file located at `/test/e2e/protractor.conf.js`.
 *
 * Listen for error event, and throw an exception if
 * the event listener is fired.
 */
gulp.task('selenium:standalone', ['webdriver-update'], webdriver_standalone);

gulp.task('webdriver-update', webdriverUpdate);
