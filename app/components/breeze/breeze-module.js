'use strict';

goog.provide('hpm.breeze.module');

goog.require('hpm.breeze.data.Service');
goog.require('hpm.breeze.entitymanager.Service');
goog.require('hpm.config.Service');

/**
 * @type {angular.Module}
 */
hpm.breeze.module = angular.module('hpm.breeze', [
    'breeze.angular'
]);

/**
 * @ngInject
 */
hpm.breeze.module.configFn = function() {};

/**
 * @param {breeze} breeze
 * @ngInject
 */
hpm.breeze.module.runFn = function(breeze)
{
    breeze.config.initializeAdapterInstance('dataService', 'mongo', true);
};

hpm.breeze.module
.config(hpm.breeze.module.configFn)
.run(hpm.breeze.module.runFn)
.service('config', hpm.config.Service)
.service('entityManagerFactory', hpm.breeze.entitymanager.Service)
.service('dataService', hpm.breeze.data.Service);
