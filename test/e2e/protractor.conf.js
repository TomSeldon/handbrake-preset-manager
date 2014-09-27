'use strict';

/**
 * @fileoverview Config for Protractor.
 */

/**
 * @type {Object}
 */
var config = {

    /*
     * Path to Selenium JAR file.
     *
     * Protractor will handle starting and stopping the server
     * before and after the tests, respectively.
     */
    seleniumServerJar: '../../node_modules/selenium-standalone-wrapper/' +
        'selenium-server-standalone-2.35.0.jar',

    chromeDriver: '../../node_modules/chromedriver/bin/chromedriver',

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
