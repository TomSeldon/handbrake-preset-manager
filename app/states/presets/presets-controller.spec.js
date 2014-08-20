'use strict';

describe('PresetsCtrl', function() {
    var ctrl;

    beforeEach(module('presets'));

    beforeEach(inject(function($injector) {
        var $rootScope = $injector.get('$rootScope'),
            $controller = $injector.get('$controller');

        ctrl = $controller('PresetsCtrl', {
            $scope: $rootScope.$new()
        });
    }));

    it('should do some stuff', function() {
        expect(ctrl.a).toEqual('');
    });
});
