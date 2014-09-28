'use strict';

/**
 * @fileoverview
 *
 * Test config. Set with the required settings to run on Travis.
 */

/**
 * @type {Object}
 */
var config = require('./prod');

/**
 * @type {string}
 */
config.database.host = 'localhost';

/**
 * @type {null}
 */
config.database.port = 27017;

/**
 * @type {string}
 */
config.database.name = 'hpm-test';

/**
 * @type {string}
 */
config.database.username = 'hpm-test';

/**
 * @type {string}
 */
config.database.password = 'test';

/**
 * @type {Object}
 */
module.exports = config;
