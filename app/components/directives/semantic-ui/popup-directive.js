'use strict';

goog.provide('hpm.semanticui.popup.Directive.factory');

/**
 * Directive for Semantic UI popups.
 * http://semantic-ui.com/modules/popup.html
 *
 * @constructor
 */
hpm.semanticui.popup.Directive = function()
{
    /**
     * @type {Function}
     */
    this.link = this.link.bind(this);

    /**
     * @type {angular.Scope}
     */
    this.scope = null;

    /**
     * @type {angular.JQLite}
     */
    this.elem = null;

    /**
     * @type {angular.Attributes}
     */
    this.attrs = null;
};

/**
 * Linking function.
 * TODO: Add parsing of data attributes.
 *
 * @param {angular.Scope} scope
 * @param {angular.JQLite} elem
 * @param {angular.Attributes} attrs
 */
hpm.semanticui.popup.Directive.prototype.link = function(scope, elem, attrs)
{
    this.scope = scope;
    this.elem = elem;
    this.attrs = attrs;

    // Initialise the Semantic UI popup
    angular.element(this.elem).popup();
};

/**
 * Semantic UI popup directive factory.
 *
 * @return {Object}
 */
hpm.semanticui.popup.Directive.factory = function()
{
    var directive = new hpm.semanticui.popup.Directive();

    return {
        link: directive.link
    };
};
