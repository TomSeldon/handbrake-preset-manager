'use strict';

/**
 * @fileoverview
 *
 * HPM: UI module
 * ==============
 */

goog.provide('hpm.ui.module');

goog.require('hpm.ui.accordion.module');
goog.require('hpm.ui.checkbox.module');
goog.require('hpm.ui.popup.module');

/**
 * @type {angular.Module}
 */
hpm.ui.module = angular.module('hpm.ui', [
    hpm.ui.accordion.module.name,
    hpm.ui.checkbox.module.name,
    hpm.ui.popup.module.name
]);
