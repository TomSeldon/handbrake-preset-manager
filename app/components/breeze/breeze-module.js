'use strict';

goog.provide('hpm.breeze.module');

goog.require('hpm.config.module');

/**
 * @type {angular.Module}
 */
hpm.breeze.module = angular.module('hpm.breeze', [
    'breeze.angular',

    hpm.config.module.name
]);

/**
 * @param {breeze} breeze
 * @ngInject
 */
hpm.breeze.module.runFn = function(breeze)
{
    // Tell breeze to we're using MongoDB
    breeze.config.initializeAdapterInstance('dataService', 'mongo', true);
};

hpm.breeze.module
    .run(hpm.breeze.module.runFn);
