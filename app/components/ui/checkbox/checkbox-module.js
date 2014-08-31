'use strict';

/**
 * @fileoverview
 *
 * HPM: UI - Checkbox module
 * =========================
 */

goog.provide('hpm.ui.checkbox.module');

goog.require('hpm.ui.checkbox.Directive.factory');

/**
 * @type {angular.Module}
 */
hpm.ui.checkbox.module = angular.module('hpm.ui.checkbox', []);

hpm.ui.checkbox.module.directive(
    'uiCheckbox',
    hpm.ui.checkbox.Directive.factory
);
