'use strict';

goog.provide('hpm.presets.list.Ctrl');

/**
 * Presets list controller.
 *
 * @param {hpm.breeze.data.Service} breeze
 * @param {hpm.logger.Service} logger
 * @constructor
 * @ngInject
 */
hpm.presets.list.Ctrl = function(breeze, logger)
{
    /**
     * @expose
     * @type {Array}
     */
    this.mediaPresets = [];

    /**
     * @type {hpm.breeze.data.Service}
     */
    this.breeze = breeze;

    this.entityManager = new this.breeze.EntityManager('breeze/hpm');

    /**
     * @type {hpm.logger.Service}
     */
    this.logger = logger;

    this.getPresets();
};

/**
 *
 */
hpm.presets.list.Ctrl.prototype.getPresets = function()
{
    var query = new this.breeze.EntityQuery()
        .from('Presets');

    this.entityManager
        .executeQuery(query)
        .then(
            function(data) {
                this.logger.info(data);
            }.bind(this),
            function(e) {
                this.logger.error(e);
            }.bind(this)
    );
};

/**
 * @param {*} data
 */
hpm.presets.list.Ctrl.prototype.presetsSuccessCb = function(data)
{
    this.logger.log(data);
    this.mediaPresets = data.results;
};

/**
 * @param {*} error
 */
hpm.presets.list.Ctrl.prototype.presetsFailCb = function(error)
{
    this.logger.error(error);
};
