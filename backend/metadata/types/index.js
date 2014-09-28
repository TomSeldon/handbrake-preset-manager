'use strict';

/**
 * @fileoverview
 *
 * Expose Breeze entity type definitions.
 */

/**
 * @type {Object}
 */
module.exports = {

    Category: require('./Category/Category'),

    Cropping: require('./Preset/Cropping'),

    PictureSettings: require('./Preset/PictureSettings'),

    OutputSettings: require('./Preset/OutputSettings'),

    VideoSettings: require('./Preset/VideoSettings'),

    Preset: require('./Preset/Preset'),

    SizeSettings: require('./Preset/SizeSettings')

};
