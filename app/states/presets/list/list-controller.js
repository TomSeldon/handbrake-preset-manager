'use strict';

goog.provide('hpm.presets.list.Ctrl');

/**
 * Presets list controller.
 *
 * @constructor
 * @ngInject
 */
hpm.presets.list.Ctrl = function()
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
