'use strict';

/**
 * @fileoverview
 *
 * Preset video settings.
 */

/**
 * Complex type definition for video settings.
 *
 * @type {Object}
 */
module.exports = {

    name: 'VideoSettings',

    isComplexType: true,

    dataProperties: {

        codec: {
            type: 'String'
        },

        framerate: {
            type: 'String'
        },

        useConstantQuality: {
            type: 'Boolean'
        },

        twoPassEncoding: {
            type: 'Boolean'
        },

        averageBitrate: {
            type: 'Int32'
        },

        rf: {
            type: 'Decimal'
        }

    }

};
