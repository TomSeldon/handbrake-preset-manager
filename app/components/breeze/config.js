'use strict';

goog.provide('hpm.breeze.Config');

/**
 * Config for Breeze
 *
 * @constructor
 * @ngInject
 */
hpm.breeze.Config = function()
{
    /**
     * todo: Inject breeze service instead of using global
     * @type {breeze|*}
     */
    this.breeze = breeze;

    this.userSessionId = this.breeze.core.getUuid();

    this.breeze
        .config.initializeAdapterInstance(
            'modelLibrary',
            'backingStore',
            true
        );
};
