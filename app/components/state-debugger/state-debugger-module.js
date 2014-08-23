'use strict';

goog.provide('hpm.debug.state.module');

goog.require('hpm.debug.state.Service');

/**
 * @type {angular.module}
 */
hpm.debug.state.module = angular.module('state-debugger', []);

/**
 * @define {boolean} - If enabled, then UI Router debug info is logged.
 */
hpm.debug.state.module.HPM_DEBUG_UI_STATE = true;

/**
 * Config method for state debugger module.
 */
hpm.debug.state.module.configuration = function() {};

hpm.debug.state.module.config(hpm.debug.state.module.configuration);

// Load the debugging module, if enabled flag set to true
if (hpm.debug.state.module.HPM_DEBUG_UI_STATE === true) {
    hpm.debug.state.module.service('stateDebugger', hpm.debug.state.Service);
}
