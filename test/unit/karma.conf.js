'use strict';

var karmaConfig;

karmaConfig = {
    basePath: __dirname + '/../../',

    frameworks: [
        'jasmine',
        'closure'
    ],

    files: [
        // Vendor
        'bower_components/es5-shim/es5-shim.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js',
        'bower_components/breezejs/breeze.debug.js',
        'bower_components/breezejs/adapters/breeze.dataService.mongo.js',
        'bower_components/breezejs/labs/breeze.angular.js',

        // Closure
        'bower_components/closurelibrary/closure/goog/base.js',

        // Mocks / setup
        'test/unit/setup.js',

        {
            pattern: 'test/unit/fixtures/**/*.js',
            included: false
        },

        {
            pattern: 'app/**/*.spec.js'
        },

        {
            pattern: 'app/components/**/*.js',
            included: false
        },

        {
            pattern: 'app/states/**/*.js',
            included: false
        },

        {
            pattern: 'app/js/**/*.js',
            included: false
        },

        {
            pattern: 'bower_components/closurelibrary/closure/goog/deps.js',
            included: false,
            served: false
        }

    ],

    exclude: [
        'app/states/**/*.pageobject.js',
        'app/states/**/*.scenario.js'
    ],

    browsers: [
        'PhantomJS'
    ],

    singleRun: true,

    reporters: [
        'spec',
        'coverage'
    ],

    preprocessors: {
        'app/**/*.spec.js': [
            'closure',
            'closure-iit'
        ],

        'test/unit/**/*.js': [
            'closure',
            'closure-iit'
        ],

        'app/states/**/!(*.pageobject|*.scenario|*.spec).js': [
            'closure',
            'coverage'
        ],

        'app/components/**/!(*.spec).js': [
            'closure',
            'coverage'
        ],

        '../bower_components/closurelibrary/closure/goog/deps.js': [
            'closure-deps'
        ]
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
