'use strict';

goog.provide('hpm.presets.list.Ctrl');

/**
 * Presets list controller.
 *
 * @param {hpm.data.Service} DataContext
 * @param {hpm.logger.Service} logger
 * @constructor
 * @ngInject
 */
hpm.presets.list.Ctrl = function(DataContext, logger)
{
    /**
     * @type {hpm.data.Service}
     */
    this.dataContext = DataContext;

    /**
     * @type {hpm.logger.Service}
     */
    this.logger = logger;

    /**
     * The list of presets to expose to the view.
     *
     * @expose
     * @type {Array}
     */
    this.presetsList = [];

    /**
     * Flag set when loading presets, or performing
     * some other async operation where we need to
     * lock the UI.
     *
     * @expose
     * @type {boolean}
     */
    this.isLoading = true;

    /**
     * Fetch Presets.
     */
    this.initPresets();
};

/**
 * Get list of all presets.
 */
hpm.presets.list.Ctrl.prototype.initPresets = function()
{
    // Are there entities in the EM cache?
    if (this.dataContext.entityManager.getEntities().length) {
        // Retrieve presets from entity cache
        this.presetsList = this.dataContext.getPresetsFromCache();
        this.isLoading = false;
    } else {
        // No entities in the cache, request them from the server
        this.getPresets();
    }
};

/**
 * Get list of all presets.
 */
hpm.presets.list.Ctrl.prototype.getPresets = function()
{
    this.isLoading = true;

    /**
     * Called on successful retrieval of presets.
     *
     * @param {*} data
     * @this {hpm.presets.list.Ctrl}
     */
    function onSuccess(data) {
        this.presetsList = data.results;
    }

    /**
     * Called if error occurred whilst fetching presets.
     *
     * @param {*} error
     * @this {hpm.presets.list.Ctrl}
     */
    function onError(error) {
        this.logger.error(error, 'Unable to get presets');
    }

    /**
     * Called after operation completed, whether successfully
     * or not.
     *
     * @this {hpm.presets.list.Ctrl}
     */
    function onComplete() {
        this.isLoading = false;
    }

    this.dataContext.getPresets()
        .then(
            onSuccess.bind(this),
            onError.bind(this)
        )
        .then(
            onComplete.bind(this)
        );
};
