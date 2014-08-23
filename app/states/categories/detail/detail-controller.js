'use strict';

goog.provide('hpm.categories.detail.Ctrl');

/**
 * Detail controller for categories.
 *
 * @constructor
 * @ngInject
 * @param {ui.router.$stateParams} $stateParams
 */
hpm.categories.detail.Ctrl = function($stateParams)
{
    /**
     * @type {integer}
     */
    this.id = $stateParams['id'];
};

/**
 * @return {integer}
 */
hpm.categories.detail.Ctrl.prototype.getId = function()
{
    return this.id;
};
