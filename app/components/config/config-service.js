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

        timeOut: 5000,

        extendedTimeOut: 3000,

        positionClass: 'toast-bottom-right',

        closeButton: true,

        closeHtml: '<i class="black close icon"></i>',

        toastClass: 'toast ui segment',

        titleClass: 'ui tiny header',

        iconClasses: {

            success: 'green',

            info: 'teal',

            error: 'red',

            warning: 'orange tertiary'

        }

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
