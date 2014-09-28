'use strict';

goog.require('hpm.categories.list.module');

describe('CategoriesListCtrl', function() {
    var ctrl;

    beforeEach(module(hpm.categories.list.module.name));

    beforeEach(inject(function($injector) {
        var $controller = $injector.get('$controller');

        ctrl = $controller('CategoriesListCtrl');
    }));
});
