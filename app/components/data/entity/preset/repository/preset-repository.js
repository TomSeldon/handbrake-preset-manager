'use strict';

goog.provide('hpm.preset.Repository');

/**
 * Repository for Preset entities.
 *
 * @ngInject
 * @param {hpm.DataFacade.Service} DataFacade
 * @constructor
 */
var PresetRepository = function(DataFacade)
{
    /**
     * @type {hpm.DataFacade.Service}
     * @private
     */
    this.data_ = DataFacade;
};

/**
 * Singular entity name.
 *
 * @const
 * @type {string}
 */
PresetRepository.ENTITY_NAME = 'Preset';

/**
 * Plural entity name.
 *
 * @const
 * @type {string}
 */
PresetRepository.ENTITY_NAME_PLURAL = 'Presets';

/**
 * @return {hpm.DataFacade.Service}
 */
PresetRepository.prototype.getDataContext = function()
{
    return this.data_;
};

/**
 * Create a new Preset and attach to the shared entity manager.
 *
 * @return {Entity}
 */
PresetRepository.prototype.createPreset = function()
{
    return this.data_.createEntity(
        PresetRepository.ENTITY_NAME
    );
};

/**
 * Return all presets.
 *
 * @return {*|Promise}
 */
PresetRepository.prototype.getAllPresets = function()
{
    var query = this.data_.createQuery()
        .from(PresetRepository.ENTITY_NAME_PLURAL);

    return this.data_.executeQuery(query);
};

/**
 * Get a preset by it's ID.
 *
 * @param {String} id
 * @return {*|Promise}
 */
PresetRepository.prototype.getPreset = function(id)
{
    var query;

    query = this.data_.createQuery()
        .from(PresetRepository.ENTITY_NAME_PLURAL)
        .where('id_', 'eq', id);

    return this.data_.executeQuery(query);
};

/**
 * Perform a search for presets using the provided query.
 * The collection type is enforced to presets, so only
 * predicate clauses, ordering, etc. need to be set.
 *
 * @param {EntityQuery} query
 * @return {*|Promise}
 */
PresetRepository.prototype.getPresets = function(query)
{
    // Ensure we're searching for presets
    query.from(PresetRepository.ENTITY_NAME_PLURAL);

    return this.data_.executeQuery(query);
};

/**
 * @type {PresetRepository}
 */
hpm.preset.Repository = PresetRepository;
