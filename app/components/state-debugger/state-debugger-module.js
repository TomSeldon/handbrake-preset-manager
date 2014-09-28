'use strict';

goog.provide('hpm.debug.state.module');

goog.require('hpm.debug.state.Service');

/**
 * @type {angular.module}
 */
hpm.debug.state.module = angular.module('hpm.debug.state', []);

/**
* @define {boolean} - If enabled, then UI Router debug info is logged.
*/
hpm.DEBUG_UI_STATE = false;

// Register state debug service
hpm.debug.state.module.service(
    'StateDebugger',
    hpm.debug.state.Service
);

/**
* Run method for state debugger module.
*
* @ngInject
* @param {hpm.debug.state.Service} StateDebugger
*/
hpm.debug.state.module.runFn = function(StateDebugger)
{
    // Init the debugging module, if enabled flag set to true
    if (hpm.DEBUG_UI_STATE === true) {
        StateDebugger.start();
    }
};

hpm.debug.state.module.run(hpm.debug.state.module.runFn);
