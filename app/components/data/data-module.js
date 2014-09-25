'use strict';

goog.provide('hpm.data.module');

goog.require('hpm.breeze.module');
goog.require('hpm.category.module');
goog.require('hpm.preset.module');

/**
 * Module containing data services.
 *
 * @type {angular.Module}
 */
hpm.data.module = angular.module('hpm.data', [
    hpm.breeze.module.name,
    hpm.category.module.name,
    hpm.preset.module.name
]);
