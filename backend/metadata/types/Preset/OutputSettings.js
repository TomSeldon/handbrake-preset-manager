'use strict';

/**
 * @fileoverview
 *
 * Preset output.
 */

/**
 * Complex type definition for category.
 *
 * @type {Object}
 */
module.exports = {

    name: 'OutputSettings',

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
