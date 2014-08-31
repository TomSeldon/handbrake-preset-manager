'use strict';

goog.provide('hpm.data.presets.Service');

/**
 * @param {breeze} breeze
 * @param {*} entityManagerFactory
 * @constructor
 * @ngInject
 */
hpm.data.presets.Service = function(breeze, entityManagerFactory)
{
    /**
     * @type {breeze}
     */
    this.breeze = breeze;

    /**
     * Create new entity manager for dealing with presets.
     *
     * @type {*}
     */
    this.entityManager = entityManagerFactory.newManager();
};

/**
 * @const
 * @type {string}
 */
hpm.data.presets.Service.ENTITY_TYPE = 'Preset';

/**
 * @const
 * @type {string}
 */
hpm.data.presets.Service.ENTITY_TYPE_PLURAL = 'Presets';

/**
 * Create a generic query that will return all presets.
 *
 * @return {breeze.EntityQuery}
 * @expose
 */
hpm.data.presets.Service.prototype.createQuery = function()
{
    return new this.breeze.EntityQuery(
        hpm.data.presets.Service.ENTITY_TYPE_PLURAL
    );
};

/**
 * Performs a new query for preset entities.
 * If no query is specified, a new EntityQuery
 * is generated that will return all presets.
 *
 * @param {breeze.EntityQuery=} query
 * @return {*}
 * @expose
 */
hpm.data.presets.Service.prototype.getPresets = function(query)
{
    query = query || this.createQuery();

    return this.entityManager.executeQuery(query);
};

/**
 * Perform a query against the entities already present
 * in the entity manager. No remote request is made.
 *
 * If a query is not specified, a new EntityQuery will
 * be created that will match all categories.
 *
 * @param {breeze.EntityQuery=} query
 * @return {*}
 * @expose
 */
hpm.data.presets.Service.prototype.getPresetsFromCache = function(query)
{
    query = query || this.createQuery();

    return this.entityManager.executeQueryLocally(query);
};

/**
 * Helper method for returning available categories.
 *
 * We don't use the CategoriesService for this as we use
 * separate entity managers.
 *
 * @return {Promise}
 * @expose
 */
hpm.data.presets.Service.prototype.getAvailableCategories = function()
{
    var query = new this.breeze.EntityQuery()
        .from('Categories')
        .orderBy('name');

    return this.entityManager.executeQuery(query);
};

/**
 * Create a new preset and attach is to the entity manager.
 *
 * @return {Object}
 * @expose
 */
hpm.data.presets.Service.prototype.createPreset = function()
{
    return this.entityManager.createEntity(
        hpm.data.presets.Service.ENTITY_TYPE
    );
};