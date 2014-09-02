'use strict';

goog.provide('hpm.config.module');

goog.require('hpm.config.Service');

/**
 * @type {angular.Module}
 */
hpm.config.module = angular.module('hpm.config', []);

hpm.config.module.service('config', hpm.config.Service);
