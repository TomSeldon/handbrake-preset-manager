'use strict';

/**
 * @fileoverview
 *
 * Base config for Protractor.
 */

/**
 * @type {Object}
 */
var config = {

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
