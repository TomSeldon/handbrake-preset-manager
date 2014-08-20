'use strict';

var gulp = require('gulp'),
    karma = require('karma').server,
    karmaConf = require('../test/unit/karma.conf.js');

/**
 * Run Karma unit tests.
 */
gulp.task('karma', function(done) {
    karma.start(karmaConf, done);
});
