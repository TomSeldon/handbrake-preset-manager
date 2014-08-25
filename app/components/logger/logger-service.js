'use strict';

goog.provide('hpm.logger.Service');

/**
 * @param {angular.$window} $window
 * @param {angular.$log} $log
 * @ngInject
 * @constructor
 */
hpm.logger.Service = function($window, $log)
{
    this.toastr = $window.toastr || hpm.logger.toastrMock;
    this.$log = $log;
};

/**
 * Mock toastr object that is used if global
 * toastr isn't available.
 *
 * @type {Object}
 */
hpm.logger.toastrMock = {
    error: function() {},
    warning: function() {},
    info: function() {},
    success: function() {}
};

/**
 * @param {string} message
 * @param {string} title
 */
hpm.logger.Service.prototype.error = function(message, title)
{
    this.toastr.error(message, title);

    if (title) {
        this.$log.error(title);
    }

    this.$log.error(message);
};

/**
 * @param {string} message
 * @param {string} title
 */
hpm.logger.Service.prototype.warning = function(message, title)
{
    this.toastr.warning(message, title);

    if (title) {
        this.$log.warning(title);
    }

    this.$log.warning(message);
};

/**
 * @param {string} message
 * @param {string} title
 */
hpm.logger.Service.prototype.info = function(message, title)
{
    this.toastr.info(message, title);

    if (title) {
        this.$log.info(title);
    }

    this.$log.info(message);
};

/**
 * @param {string} message
 * @param {string} title
 */
hpm.logger.Service.prototype.success = function(message, title)
{
    this.toastr.success(message, title);

    if (title) {
        this.$log.info(title);
    }

    this.$log.info(message);
};

/**
 * Log directly to console.
 *
 * @param {string|string[]} message
 */
hpm.logger.Service.prototype.log = function(message)
{
    this.$log.log(message);
};
