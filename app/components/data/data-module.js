'use strict';

goog.provide('hpm.data.module');

goog.require('hpm.breeze.module');
goog.require('hpm.data.categories.module');
goog.require('hpm.data.presets.module');

/**
 * Module containing data services.
 *
 * @type {angular.Module}
 */
hpm.data.module = angular.module('hpm.data', [
    hpm.breeze.module.name,
    hpm.data.categories.module.name,
    hpm.data.presets.module.name
]);
