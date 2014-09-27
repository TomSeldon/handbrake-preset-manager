'use strict';

/**
 * @fileoverview Config for Protractor.
 */

/**
 * @type {Object}
 */
var config = {

    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

    // The testing framework to use
    framework: 'cucumber',

    cucumberOpts: {
        format: 'pretty',
        require: '../../features/step_definitions/**/*.js'
    }

};

/**
 * Important:
 * Protractor expects the config file
 * to export a `config` property, or it
 * will go a bit nuts.
 *
 * @type {Object}
 */
exports.config = config;
