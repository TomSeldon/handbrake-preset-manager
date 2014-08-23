'use strict';

describe('CategoriesListCtrl', function() {
    var ctrl;

    beforeEach(module('presets.list'));

    beforeEach(inject(function($injector) {
        var $rootScope = $injector.get('$rootScope'),
            $controller = $injector.get('$controller');

        ctrl = $controller('PresetsListCtrl', {
            $scope: $rootScope.$new()
        });
    }));

    it('should do some stuff', function() {
        expect(ctrl.a).toEqual('');
    });
});
