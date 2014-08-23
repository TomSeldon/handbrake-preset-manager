'use strict';

goog.provide('hpm.categories.list.Ctrl');

/**
 * Categories list controller.
 *
 * @constructor
 * @ngInject
 */
hpm.categories.list.Ctrl = function()
{
    /**
     * @type {array}
     * @expose
     */
    this.categoryList = [
        {
            'id': 1,
            'name': 'Fake 1'
        },

        {
            'id': 2,
            'name': 'Test'
        }
    ];
};
