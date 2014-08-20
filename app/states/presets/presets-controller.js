'use strict';

goog.provide('hpm.presets.Ctrl');

/**
 * Presets controller.
 *
 * @constructor
 * @ngInject
 */
hpm.presets.Ctrl = function()
{
    /**
     * @type {array}
     * @expose
     */
    this.mediaPresets = [
        {
            'id': 1,
            'name': 'Fake 1',
            'category': 'TV (Animated)'
        },

        {
            'id': 2,
            'name': 'Test',
            'category': 'Film (3D)'
        }
    ];
};
