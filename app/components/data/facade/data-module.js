'use strict';

goog.provide('hpm.DataFacade.module');

goog.require('hpm.DataFacade.Service');
goog.require('hpm.entityManager.module');
goog.require('hpm.entityQuery.module');

/**
 * Module containing data facade.
 *
 * @type {angular.Module}
 */
hpm.DataFacade.module = angular.module('hpm.DataFacade', [
    hpm.entityManager.module.name,
    hpm.entityQuery.module.name
]);

// Register data service
hpm.DataFacade.module.service('DataFacade', hpm.DataFacade.Service);
