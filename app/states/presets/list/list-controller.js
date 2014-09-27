'use strict';

goog.provide('hpm.presets.list.Ctrl');

/**
 * Presets list controller.
 *
 * TODO: Move `getPresets` functionality out of controller.
 *       Perhaps better resolved before controller instantiation
 *       and loaded from a lookup.
 *
 * @param {hpm.preset.Repository} PresetRepository
 * @param {hpm.logger.Service} logger
 * @constructor
 * @ngInject
 */
hpm.presets.list.Ctrl = function(PresetRepository, logger)
{
    /**
     * @type {hpm.preset.Repository}
     * @private
     */
    this.presetRepository_ = PresetRepository;

    /**
     * @type {hpm.DataFacade.Service}
     */
    this.dataContext = this.presetRepository_.getDataContext();

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
    this.presetsList = this.getPresets();

    /**
     * Flag set when loading presets, or performing
     * some other async operation where we need to
     * lock the UI.
     *
     * @expose
     * @type {boolean}
     */
    this.isLoading = true;
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

    this.presetRepository_.getAllPresets()
        .then(
            onSuccess.bind(this),
            onError.bind(this)
        )
        .then(
            onComplete.bind(this)
        );
};
