'use strict';

/**
 * @fileoverview
 *
 * Config for Protractor when using an existing Selenium server.
 */

var config = require('./protractor.base.conf').config;

/**
 * @type {String}
 */
config.seleniumAddress = 'http://127.0.0.1:4444/wd/hub';

/**
 * Important:
 * Protractor expects the config file
 * to export a `config` property, or it
 * will go a bit nuts.
 *
 * @type {Object}
 */
exports.config = config;
