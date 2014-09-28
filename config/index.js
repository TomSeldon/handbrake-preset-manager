'use strict';

/**
 * @fileoverview
 *
 * Configuration settings for Handbrake Preset Manager.
 */

var env = process.env.NODE_ENV || 'production',
    config = null;

switch (env) {
    case 'production':
        config = require('./prod');
        break;

    case 'test':
        config = require('./test');
        break;

    case 'dev':
        config = require('./dev');
        break;

    default:
        throw new Error('Invalid environment specified: ' + env);
}

/**
 * @type {Object}
 */
module.exports = config;
