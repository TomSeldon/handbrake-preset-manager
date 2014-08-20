'use strict';

var path = require('path');

var karmaConfig;

karmaConfig = {
    basePath: path.resolve(__dirname + '/../../'),

    frameworks: ['jasmine'],

    files: [
        'bower_components/angular/angular.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js',

        'bower_components/closure-library/closure/goog/base.js',
        'bower_components/closure-library/closure/goog/deps.js',

        'app/components/**/*.js',

        'app/states/**/*-controller.js',
        'app/states/*/*/*.js',
        'app/states/**/*.js',

        'app/js/app.js'
    ],

    exclude: [
        'app/states/**/*.pageobject.js',
        'app/states/**/*.scenario.js'
    ],

    browsers: ['PhantomJS'],

    autoWatch: false,

    singleRun: true,

    reporters: [
        'spec',
        'coverage'
    ],

    preprocessors: {
        'app/js/app.js': 'coverage',
        'app/states/**/!(*.spec|*.scenario|*.spec).js': 'coverage',
        'app/components/**/!(*.spec).js': 'coverage'
    },

    coverageReporter: {
        type: 'html',
        dir: 'test/unit/coverage'
    }
};

/**
 * @type {karmaConfig}
 */
module.exports = karmaConfig;
