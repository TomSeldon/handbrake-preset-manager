'use strict';

goog.provide('hpm.category.module');

goog.require('hpm.DataFacade.module');
goog.require('hpm.category.Repository');

/**
 * @type {angular.Module}
 */
hpm.category.module = angular.module('hpm.category', [
        hpm.DataFacade.module.name
])
    .service('CategoryRepository', hpm.category.Repository);
