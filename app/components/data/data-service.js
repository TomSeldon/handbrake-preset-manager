'use strict';

goog.provide('hpm.data.Service');

/**
 * @param {breeze} breeze
 * @param {hpm.breeze.entitymanager.Service} entityManagerFactory
 * @constructor
 * @ngInject
 */
hpm.data.Service = function(breeze, entityManagerFactory)
{
    /**
     * @type {breeze}
     */
    this.breeze = breeze;

    /**
     * Get the shared preset manager.
     *
     * @type {*}
     */
    this.entityManager = entityManagerFactory.getSharedManager();

    /**
     * To be populated with lookup data on
     * initialization.
     *
     * @type {{}}
     */
    this.lookups = {};

    /**
     * Keep track of whether this data context
     * has been initialized.
     *
     * @type {boolean}
     */
    this.initialized = false;

    /**
     * Declare API.
     */
    this.api = {
        initialize: this.initialize,
        createQuery: this.createQuery,
        getLookups: this.getLookups,
        getPresets: this.getPresets,
        getCategories: this.getCategories,
        createPreset: this.createPreset,
        createCategory: this.createCategory,
        cancelAllChanges: this.cancelAllChanges,
        saveChanges: this.saveChanges,
        hasChanges: this.hasChanges,
        hasFetchedMetadata: this.hasFetchedMetadata
    };

    /**
     * Exposes the above declared API
     * after first binding the returned methods
     * to the correct context.
     *
     * @return {Object}
     */
    return this.exposeApi();
};

/**
 * Returns the API after binding the methods
 * to the correct context.
 *
 * @return {Object}
 */
hpm.data.Service.prototype.exposeApi = function()
{
    for (var methodName in this.api) {
        if (this.api.hasOwnProperty(methodName)) {
            this.api[methodName] = this.api[methodName].bind(this);
        }
    }

    return this.api;
};

/**
 * @throws {Error}
 * @return {Promise}
 */
hpm.data.Service.prototype.initialize = function()
{
    var lookupsQuery;

    if (this.initialized === true) {
        throw new Error(
            'Data context initialization attempted multiple times.'
        );
    }

    // Get lookups
    lookupsQuery = this.createQuery().from('Lookups');

    return this.entityManager.executeQuery(lookupsQuery)
        .then(function(data) {
            this.lookups = data.results[0];
            this.initialized = true;
        }.bind(this));
};

/**
 * @return {breeze.EntityQuery}
 */
hpm.data.Service.prototype.createQuery = function()
{
    return new this.breeze.EntityQuery();
};

/**
 * @return {Object}
 */
hpm.data.Service.prototype.getLookups = function()
{
    return this.lookups;
};

/**
 * Performs a new query for preset entities.
 *
 * If no query is specified, a new EntityQuery
 * is generated that will return all presets.
 *
 * @param {breeze.EntityQuery=} query
 * @return {*}
 * @expose
 */
hpm.data.Service.prototype.getPresets = function(query)
{
    query = query || this.createQuery().from('Presets');

    return this.entityManager.executeQuery(query);
};

/**
 * Performs a new query for category entities.
 *
 * If no query is specified, a new EntityQuery
 * is generated that will return all categories.
 *
 * @param {breeze.EntityQuery=} query
 * @return {*}
 * @expose
 */
hpm.data.Service.prototype.getCategories = function(query)
{
    query = query || this.createQuery().from('Categories');

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
hpm.data.Service.prototype.getPresetsFromCache = function(query)
{
    query = query || this.createQuery();

    return this.entityManager.executeQueryLocally(query);
};

/**
 * Create a new preset and attach is to the entity manager.
 *
 * @return {Object}
 * @expose
 */
hpm.data.Service.prototype.createPreset = function()
{
    return this.entityManager.createEntity('Preset');
};

/**
 * Create a new preset and attach is to the entity manager.
 *
 * @return {Object}
 * @expose
 */
hpm.data.Service.prototype.createCategory = function()
{
    return this.entityManager.createEntity('Category');
};

/**
 * Save changes in the entity manager.
 *
 * @return {*|Promise}
 */
hpm.data.Service.prototype.saveChanges = function()
{
    return this.entityManager.saveChanges();
};

/**
 * Cancel any changes present in the entity manager.
 *
 * @return {*}
 */
hpm.data.Service.prototype.cancelAllChanges = function()
{
    return this.entityManager.rejectChanges();
};

/**
 * Checks entity manager for changes.
 *
 * @return {Boolean}
 */
hpm.data.Service.prototype.hasChanges = function()
{
    return this.entityManager.hasChanges();
};

/**
 * Check whether metadata has been returned for the data service.
 *
 * @return {Boolean}
 */
hpm.data.Service.prototype.hasFetchedMetadata = function()
{
    var serviceName = this.entityManager.serviceName,
        metadataStore = this.entityManager.metadataStore;

    return metadataStore.hasMetadataFor(serviceName);
};
