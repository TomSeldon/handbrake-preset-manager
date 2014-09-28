'use strict';

goog.provide('hpm.entityManager.module');

goog.require('hpm.EntityManagerFactory');
goog.require('hpm.breeze.module');
goog.require('hpm.config.module');

/**
 * @type {angular.Module}
 */
hpm.entityManager.module = angular.module('hpm.entityManager', [
    hpm.breeze.module.name,
    hpm.config.module.name
    ])
    .service('EntityManagerFactory', hpm.EntityManagerFactory);
