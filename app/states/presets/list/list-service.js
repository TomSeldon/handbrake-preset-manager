'use strict';

goog.provide('hpm.states.presets.list.Service');

/**
 * @param {hpm.breeze.data.Service} dataService
 * @constructor
 * @ngInject
 */
hpm.states.presets.list.Service = function(dataService)
{
    /**
     * @type {hpm.breeze.data.Service}
     */
    this.dataService = dataService;
};

hpm.states.presets.list.Service.prototype.getPresets = function()
{
};
