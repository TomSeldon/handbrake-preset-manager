'use strict';

goog.provide('hpm.entityQuery.module');

goog.require('hpm.EntityQueryFactory');
goog.require('hpm.breeze.module');

/**
 * @type {angular.Module}
 */
hpm.entityQuery.module = angular.module('hpm.entityQuery', [
    hpm.breeze.module.name
    ])
    .service('EntityQueryFactory', hpm.EntityQueryFactory);
