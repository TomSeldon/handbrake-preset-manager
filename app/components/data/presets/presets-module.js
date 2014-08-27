'use strict';

goog.provide('hpm.data.presets.module');

goog.require('hpm.breeze.module');
goog.require('hpm.data.presets.Service');

/**
 * Data service for Presets entities.
 *
 * @type {angular.Module}
 */
hpm.data.presets.module = angular.module('hpm.data.presets', [
    hpm.breeze.module.name
]);

/**
 * Register presets service
 */
hpm.data.presets.module.service(
    'PresetsService',
    hpm.data.presets.Service
);
