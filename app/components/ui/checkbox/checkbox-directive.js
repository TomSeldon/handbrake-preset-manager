'use strict';

/**
 * @fileoverview
 *
 * HPM: UI - Checkbox directive
 * ============================
 *
 * Simple directive that instantiates an element
 * as a Semantic UI checkbox.
 */

goog.provide('hpm.ui.checkbox.Directive.factory');

/**
 * Directive for Semantic UI checkboxs.
 * http://semantic-ui.com/modules/checkbox.html
 *
 * @constructor
 */
hpm.ui.checkbox.Directive = function() {};

/**
 * Linking function.
 * TODO: Add parsing of data attributes.
 *
 * @param {angular.Scope} scope
 * @param {angular.Element} element
 * @ngInject
 */
hpm.ui.checkbox.Directive.prototype.link = function(scope, element)
{
    // Initialise the Semantic UI checkbox
    angular.element(element).checkbox();
};

/**
 * Semantic UI checkbox directive factory.
 *
 * @return {Object}
 */
hpm.ui.checkbox.Directive.factory = function()
{
    var directive = new hpm.ui.checkbox.Directive();

    return {
        link: directive.link
    };
};
