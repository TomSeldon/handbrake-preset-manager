'use strict';

/**
 * @fileoverview
 *
 * Preset picture size settings,
 */

/**
 * Complex type definition for picture
 * size settings.
 *
 * @type {Object}
 */
module.exports = {

    name: 'SizeSettings',

    isComplexType: true,

    dataProperties: {

        width: {
            type: 'Int32'
        },

        height: {
            type: 'Int32'
        },

        keepAspectRatio: {
            type: 'Boolean'
        },

        anamorphic: {
            type: 'String'
        },

        modulus: {
            type: 'Int16'
        },

        cropping: {
            complexTypeName: 'Cropping'
        }

    }

};
