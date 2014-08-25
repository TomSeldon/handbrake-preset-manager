'use strict';

goog.provide('hpm.config.Service');

/**
* @param {angular.$window} $window
* @ngInject
* @constructor
*/
hpm.config.Service = function($window)
{
    /**
     * Toastr settings
     *
     * @type {{timeout: number, positionClass: string}}
     */
    this.toastr = {

        timeout: 2000,

        positionClass: 'toast-bottom-right'

    };

    /**
     * Breeze settings
     *
     * @type {{server: string, serviceRoot: string, serviceName: string}}
     */
    this.breeze = {

        server: 'Express',

        serviceRoot: $window.location.protocol +
            '//' + $window.location.host + '/',

        serviceName: 'breeze/hpm'

    };
};
