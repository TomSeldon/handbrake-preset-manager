'use strict';

/**
 * @fileoverview
 *
 * HPM: UI - Accordion module
 * ==========================
 */

goog.provide('hpm.ui.accordion.module');

goog.require('hpm.ui.accordion.Directive.factory');

/**
 * @type {angular.Module}
 */
hpm.ui.accordion.module = angular.module('hpm.ui.accordion', []);

hpm.ui.accordion.module.directive(
    'uiAccordion',
    hpm.ui.accordion.Directive.factory
);
