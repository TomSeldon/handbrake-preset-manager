'use strict';

goog.provide('hpm.preset.module');

goog.require('hpm.DataFacade.module');
goog.require('hpm.preset.Repository');

/**
 * @type {angular.Module}
 */
hpm.preset.module = angular.module('hpm.preset', [
        hpm.DataFacade.module.name
])
    .service('PresetRepository', hpm.preset.Repository);
