'use strict';

goog.provide('hpm.categories.list.Ctrl');

/**
 * Categories list controller.
 *
 * @param {hpm.data.categories.Service} CategoriesService
 * @param {hpm.util.logger} logger
 * @constructor
 * @ngInject
 */
hpm.categories.list.Ctrl = function(CategoriesService, logger)
{
    /**
     * @type {hpm.categories.list.Service}
     */
    this.categoriesService = CategoriesService;

    /**
     * @type {hpm.util.logger}
     */
    this.logger = logger;

    /**
     * @type {array}
     * @expose
     */
    this.categoryList = [];

    /**
     * Flag set when loading categories.
     *
     * @type {boolean}
     * @expose
     */
    this.isLoading = true;

    /**
     * Update category list.
     */
    this.getCategories();
};

/**
 * Get list of all categories.
 */
hpm.categories.list.Ctrl.prototype.getCategories = function()
{
    this.isLoading = true;

    /**
     * Called on successful retrieval of categories.
     *
     * @param {*} data
     * @this {hpm.categories.list.Ctrl}
     */
    function onSuccess(data) {
        this.categoryList = data.results;
    }

    /**
     * Called if error occured when fetching categories.
     *
     * @param {*} error
     * @this {hpm.categories.list.Ctrl}
     */
    function onError(error) {
        this.logger.error(error, 'Unable to get categories');
    }

    /**
     * Called after fetch operation complete (whether successful
     * or not)
     *
     * @this {hpm.categories.list.Ctrl}
     */
    function onComplete() {
        this.isLoading = false;
    }

    this.categoriesService.getCategories()
        .then(
            onSuccess.bind(this),
            onError.bind(this)
        )
        .then(
            onComplete.bind(this)
        );
};

/**
 * @return {Boolean}
 * @expose
 */
hpm.categories.list.Ctrl.prototype.hasChanges = function()
{
    return this.categoriesService.hasChanges();
};

/**
 * Cancel changes for a single category.
 *
 * @param {Object} category
 * @expose
 */
hpm.categories.list.Ctrl.prototype.cancelChanges = function(category)
{
    var entAspect = category.entityAspect;

    if (!entAspect.entityState.isAdded()) {
        entAspect.rejectChanges();
    }

    category.beingEdited = false;
};

/**
 * Cancel all changes.
 * @expose
 */
hpm.categories.list.Ctrl.prototype.cancelAllChanges = function()
{
    this.categoriesService.rejectChanges();
    this.getCategories();
};

/**
 * Save all changes.
 *
 * @expose
 */
hpm.categories.list.Ctrl.prototype.saveChanges = function()
{
    this.isLoading = true;

    this.categoriesService.saveChanges()
        .then(
            this.saveSuccess.bind(this),
            this.saveFail.bind(this)
        )
        .then(
            function() {
                this.isLoading = false;
            }.bind(this)
        );
};

/**
 * Save success callback.
 *
 * @param {Object} saveResult
 */
hpm.categories.list.Ctrl.prototype.saveSuccess = function(saveResult)
{
    var numUpdated = parseInt(saveResult.entities.length, 10);

    this.logger.success(
        // message
        numUpdated + ' entities were affected',

        // title
        'Saved successfully'
    );

    this.markAllNotEditing();
};

/**
 * Save error callback.
 *
 * @param {breeze.Error} error
 */
hpm.categories.list.Ctrl.prototype.saveFail = function(error)
{
    this.logger.error(
        // message
        'Unable to save changes. See validation errors for details.',

        // Message
        'Save failed'
    );
};

/**
 * Mark all categories as not being edited.
 */
hpm.categories.list.Ctrl.prototype.markAllNotEditing = function()
{
    this.categoryList.forEach(function(category) {
        category.beingEdited = false;
    });
};

/**
 * Event fired when a category name is altered.
 * We listen for the 'enter' key and disable
 * editing when it's pressed.
 *
 * @param {angular.Event} $event
 * @param {Object} category
 */
hpm.categories.list.Ctrl.prototype.changeEvent = function($event, category)
{
    if (event.which === 13) {
        category.beingEdited = false;
    }
};

/**
 * Mark category as being edited.
 *
 * @param {Object} category
 * @expose
 */
hpm.categories.list.Ctrl.prototype.edit = function(category)
{
    category.beingEdited = true;
};

/**
 * Check whether an entity is allowed to be edited.
 * An example use case would be to disable editing
 * whilst an entity is being saved.
 *
 * @param {Object} category
 * @return {boolean}
 * @expose
 */
hpm.categories.list.Ctrl.prototype.canEdit = function(category)
{
    var saving = category.entityAspect.isBeingSaved;

    return !saving;
};

/**
 * Marks a category for deletion.
 *
 * @param {Object} category
 */
hpm.categories.list.Ctrl.prototype.remove = function(category)
{
    var index = this.categoryList.indexOf(category);

    category.entityAspect.setDeleted();

    this.categoryList.splice(index, 1);
};

/**
 * Create new Category.
 */
hpm.categories.list.Ctrl.prototype.createCategory = function()
{
    var category = this.categoriesService.createCategory();

    category.beingEdited = true;

    // Insert at start of list
    this.categoryList.splice(0, 0, category);
};
