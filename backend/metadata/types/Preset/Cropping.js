'use strict';

/**
 * @fileoverview
 *
 * Preset picture cropping settings.
 */

/**
 * Complex type definition for picture cropping settings.
 *
 * @type {Object}
 */
module.exports = {

    name: 'Cropping',

    isComplexType: true,

    dataProperties: {

        auto: {
            type: 'Boolean',
            defaultValue: true
        },

        top: {
            type: 'Int16',
            defaultValue: 0
//            max: 118
        },

        bottom: {
            type: 'Int16',
            defaultValue: 0
//            max: 118
        },

        left: {
            type: 'Int16',
            defaultValue: 0
//            max: 158
        },

        right: {
            type: 'Int16',
            defaultValue: 0
//            max: 158
        }

    }

};
