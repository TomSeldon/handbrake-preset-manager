'use strict';

goog.provide('hpm.breeze.module');

goog.require('hpm.breeze.data.Service');
goog.require('hpm.breeze.entitymanager.Service');
goog.require('hpm.breeze.namingconvention.Factory');
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
 * @param {hpm.breeze.namingconvention.Factory} namingConventionFactory
 * @ngInject
 */
hpm.breeze.module.runFn = function(breeze, namingConventionFactory)
{
    // Tell breeze to we're using MongoDB
    breeze.config.initializeAdapterInstance('dataService', 'mongo', true);

    // Set default naming convention
    // TODO: Not working properly: MetadataStores still default to 'noChange'
    //namingConventionFactory.createNamingConvention().setAsDefault();
};

hpm.breeze.module
    .config(hpm.breeze.module.configFn)
    .run(hpm.breeze.module.runFn)
    .factory('namingConventionFactory', hpm.breeze.namingconvention.Factory)
    .service('config', hpm.config.Service)
    .service('entityManagerFactory', hpm.breeze.entitymanager.Service)
    .service('dataService', hpm.breeze.data.Service);
