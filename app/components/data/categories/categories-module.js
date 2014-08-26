'use strict';

goog.provide('hpm.data.categories.module');

goog.require('hpm.breeze.module');
goog.require('hpm.data.categories.Service');

/**
 * Data service for Category entities.
 *
 * @type {angular.Module}
 */
hpm.data.categories.module = angular.module('hpm.data.categories', [
    hpm.breeze.module.name
]);

/**
 * Register categories service
 */
hpm.data.categories.module.service(
    'CategoriesService',
    hpm.data.categories.Service
);
