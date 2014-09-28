'use strict';

/**
 * @fileoverview
 *
 * Config for Protractor when running on SauceLabs.
 */

var config = require('./protractor.base.conf').config;

/**
 * @type {String}
 */
config.sauceUser = process.env.SAUCE_USERNAME;

/**
 * @type {String}
 */
config.sauceKey = process.env.SAUCE_ACCESS_KEY;

/**
 * @type {{browserName: string}}
 */
config.capabilities = {
    'browserName': 'chrome',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'name': 'Handbrake Preset Manager'
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
