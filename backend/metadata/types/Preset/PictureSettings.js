'use strict';

/**
 * @fileoverview
 *
 * Preset picture settings.
 */

/**
 * Complex type definition for picture settings.
 *
 * @type {Object}
 */
module.exports = {

    name: 'PictureSettings',

    isComplexType: true,

    dataProperties: {

        size: {
            complexTypeName: 'SizeSettings'
        }
//
//        filters: {
//            complexTypeName: 'FilterSettings'
//        }

    }

};
