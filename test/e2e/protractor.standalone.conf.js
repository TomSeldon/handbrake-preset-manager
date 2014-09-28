'use strict';

/**
 * @fileoverview
 *
 * Config for Protractor that will handle starting it's own Selenium server.
 */

var config = require('./protractor.base.conf').config;


/**
 * Path to Selenium JAR file.
 *
 * Protractor will handle starting and stopping the server
 * before and after the tests, respectively.
 *
 * @type {String}
 */
config.seleniumServerJar = '../../node_modules/selenium-standalone-wrapper/' +
    'selenium-server-standalone-2.35.0.jar';

/**
 * @type {String}
 */
config.chromeDriver = '../../node_modules/chromedriver/bin/chromedriver';

/**
 * Important:
 * Protractor expects the config file
 * to export a `config` property, or it
 * will go a bit nuts.
 *
 * @type {Object}
 */
exports.config = config;
