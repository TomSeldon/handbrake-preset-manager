'use strict';

/**
 * @fileoverview
 *
 * Preset output.
 */

/**
 * Entity type definition for category.
 *
 * @type {Object}
 */
module.exports = {

    name: 'Output',

    isComplexType: true,

    dataProperties: {

        fileFormat: {
            required: true
        },

        largeFileSize: {
            type: 'Boolean',
            defaultValue: false
        },

        webOptimized: {
            type: 'Boolean',
            defaultValue: false
        },

        ipod5gSupport: {
            type: 'Boolean',
            defaultValue: false
        }

    }

};
