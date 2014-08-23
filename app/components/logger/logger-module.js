'use strict';

goog.provide('hpm.logger.module');

goog.require('hpm.logger.Service');

/**
 * @type {angular.Module}
 */
hpm.logger.module = angular.module('logger', []);

/**
 * @ngInject
 */
hpm.logger.module.configuration = function() {};

hpm.logger.module
    .config(hpm.logger.module.configuration)
    .service('logger', hpm.logger.Service);
