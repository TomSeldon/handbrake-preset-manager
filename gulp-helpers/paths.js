'use strict';

/**
 * Files config used in Gulp tasks.
 */
var paths = {

    app: 'app/js/app.js',

    build: {
        filename: 'app.min.js',
        directory: 'build/js/'
    },

    states: [
        'app/states/**/*.js',
        '!app/states/**/*.pageobject.js',
        '!app/states/**/*.scenario.js',
        '!app/states/**/*.spec.js'
    ],

    components: [
        'app/components/**/*.js',
        '!app/components/**/*.spec.js'
    ],

    less: [
        'app/less/index.less',
        'app/states/**/*.less'
    ],

    images: [
        './app/img/**/*'
    ],

    vendor: 'bower_components'

};

/**
 * Array of patterns of all script files.
 */
paths.scripts = [
    'app/**/*.js',
    '!' + paths.build
];

/**
 * @type {Object}
 */
module.exports = paths;
