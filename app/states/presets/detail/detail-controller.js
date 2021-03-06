'use strict';

goog.provide('hpm.presets.detail.Ctrl');

/**
 * Detail controller for presets.
 *
 * @constructor
 * @ngInject
 * @param {ui.router.$stateParams} $stateParams
 */
hpm.presets.detail.Ctrl = function($stateParams)
{
    /**
     * @type {integer}
     */
    this.id = $stateParams['id'];
};

/**
 * @return {integer}
 */
hpm.presets.detail.Ctrl.prototype.getId = function()
{
    return this.id;
};
