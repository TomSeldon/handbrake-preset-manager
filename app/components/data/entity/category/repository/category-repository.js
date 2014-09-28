'use strict';

goog.provide('hpm.category.Repository');

/**
 * Repository for Category entities.
 *
 * @ngInject
 * @param {hpm.DataFacade.Service} DataFacade
 * @constructor
 */
var CategoryRepository = function(DataFacade)
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
CategoryRepository.ENTITY_NAME = 'Category';

/**
 * Plural entity name.
 *
 * @const
 * @type {string}
 */
CategoryRepository.ENTITY_NAME_PLURAL = 'Categories';

/**
 * @return {hpm.DataFacade.Service}
 */
CategoryRepository.prototype.getDataContext = function()
{
    return this.data_;
};

/**
 * Create a new Category and attach to the shared entity manager.
 *
 * @return {Entity}
 */
CategoryRepository.prototype.createCategory = function()
{
    return this.data_.createEntity(
        CategoryRepository.ENTITY_NAME
    );
};

/**
 * Return all categories.
 *
 * @return {*|Promise}
 */
CategoryRepository.prototype.getAllCategories = function()
{
    var query = this.data_.createQuery()
        .from(CategoryRepository.ENTITY_NAME_PLURAL);

    return this.data_.executeQuery(query);
};

/**
 * Get a category by it's ID.
 *
 * @param {String} id
 * @return {*|Promise}
 */
CategoryRepository.prototype.getCategory = function(id)
{
    var query;

    query = this.data_.createQuery()
        .from(CategoryRepository.ENTITY_NAME_PLURAL)
        .where('id_', 'eq', id);

    return this.data_.executeQuery(query);
};

/**
 * Perform a search for categories using the provided query.
 * The collection type is enforced to categories, so only
 * predicate clauses, ordering, etc. need to be set.
 *
 * @param {EntityQuery} query
 * @return {*|Promise}
 */
CategoryRepository.prototype.getCategories = function(query)
{
    // Ensure we're searching for categories
    query.from(CategoryRepository.ENTITY_NAME_PLURAL);

    return this.data_.executeQuery(query);
};

/**
 * @type {CategoryRepository}
 */
hpm.category.Repository = CategoryRepository;
