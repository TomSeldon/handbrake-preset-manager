'use strict';

goog.provide('hpm.data.module');

goog.require('hpm.breeze.module');
goog.require('hpm.data.Service');

/**
 * Module containing data services.
 *
 * @type {angular.Module}
 */
hpm.data.module = angular.module('hpm.data', [
    hpm.breeze.module.name
]);

// Register data service
hpm.data.module.service('DataContext', hpm.data.Service);
