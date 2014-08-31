'use strict';

goog.provide('hpm.debug.state.Service');

/**
 * Debugging service for Angular UI Router states.
 *
 * @param {angular.rootScope} $rootScope
 * @param {angular.$log} $log
 * @constructor
 * @ngInject
 */
hpm.debug.state.Service = function($rootScope, $log)
{
    /**
     * @type {angular.rootScope}
     */
    this.rootScope = $rootScope;

    /**
     * @type {angular.$log}
     */
    this.logger = $log;
};

/**
* Start debug logging.
*/
hpm.debug.state.Service.prototype.start = function()
{
    this.rootScope.$on(
        '$stateChangeStart',
        this.stateChangeStart.bind(this)
    );

    this.rootScope.$on(
        '$stateChangeError',
        this.stateChangeError.bind(this)
    );

    this.rootScope.$on(
        '$stateChangeSuccess',
        this.stateChangeSuccess.bind(this)
    );

    this.rootScope.$on(
        '$viewContentLoaded',
        this.viewContentLoaded.bind(this)
    );

    this.rootScope.$on(
        '$stateNotFound',
        this.stateNotFound.bind(this)
    );
};

/**
* Log on state change start.
*
* @param {*} event
* @param {Object} toState
* @param {Object} toParams
*/
hpm.debug.state.Service.prototype.stateChangeStart = function(
    event,
    toState,
    toParams) {

    this.logger.log(
        '$stateChangeStart to ' +
            toState.to + '- fired when the transition begins. ' +
            'toState,toParams : \n',
        toState,
        toParams
    );
};

/**
* Log on state change error.
*/
hpm.debug.state.Service.prototype.stateChangeError = function()
{
    this.logger.error(
        '$stateChangeError - fired when an error occurs during transition.'
    );

    this.logger.error(arguments);
};

/**
* Log on state change success.
*
* @param {*} event
* @param {string} toState
*/
hpm.debug.state.Service.prototype.stateChangeSuccess = function(event, toState)
{
    this.logger.info(
        '$stateChangeSuccess ' + toState.name + ' - fired' +
            ' once the state transition is complete.'
    );
};

/**
* Log on view content loaded.
*
* @param {*} event
*/
hpm.debug.state.Service.prototype.viewContentLoaded = function(event)
{
    this.logger.log('$viewContentLoaded - fired after dom rendered', event);
};

/**
* Log on state not found.
*
* @param {*} event
* @param {Object} unfoundState
* @param {string} fromState
* @param {*} fromParams
*/
hpm.debug.state.Service.prototype.stateNotFound = function(
    event,
    unfoundState,
    fromState,
    fromParams) {

    this.logger.error('$stateNotFound ' + unfoundState.to + ' - fired ' +
        'when a state cannot be found by its name.'
    );

    this.logger.error(unfoundState, fromState, fromParams);
};
