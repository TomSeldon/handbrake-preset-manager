'use strict';

goog.require('hpm.presets.list.module');

describe('PresetsListCtrl', function() {
    var ctrl;

    beforeEach(module(hpm.presets.list.module.name));

    beforeEach(inject(function($injector) {
        var $controller = $injector.get('$controller'),
            DataContext,
            logger;

        DataContext = {};
        logger = {};

        ctrl = $controller('PresetsListCtrl', {
            DataContext: DataContext,
            logger: logger
        });
    }));
});
