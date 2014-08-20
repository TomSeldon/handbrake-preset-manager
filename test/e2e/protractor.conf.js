'use strict';

var config;

config = {
    specs: [
        'scenarios.js',
        '../../app/states/**/*.scenario.js'
    ],

    capabilities: {
        'browserName': 'phantomjs'
    },

    baseUrl: 'http://localhost:8008',

    framework: 'jasmine',

    onPrepare: function() {
        require('jasmine-spec-reporter');

        jasmine.getEnv().addReporter(new jasmine.SpecReporter());
    }
};

/**
 * @type {*}
 */
exports.config = config;
