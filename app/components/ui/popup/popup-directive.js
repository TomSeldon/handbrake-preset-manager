'use strict';

/**
 * @fileoverview
 *
 * HPM: UI - Popup directive
 * =========================
 *
 * Simple directive that instantiates an element
 * as a Semantic UI popup.
 */

goog.provide('hpm.ui.popup.Directive.factory');

/**
 * Directive for Semantic UI popups.
 * http://semantic-ui.com/modules/popup.html
 *
 * @constructor
 */
hpm.ui.popup.Directive = function() {};

/**
 * Linking function.
 * TODO: Add parsing of data attributes.
 *
 * @param {angular.Scope} scope
 * @param {angular.Element} element
 * @ngInject
 */
hpm.ui.popup.Directive.prototype.link = function(scope, element)
{
    // Initialise the Semantic UI popup
    angular.element(element).popup();
};

/**
 * Semantic UI popup directive factory.
 *
 * @return {Object}
 */
hpm.ui.popup.Directive.factory = function()
{
    var directive = new hpm.ui.popup.Directive();

    return {
        link: directive.link
    };
};
