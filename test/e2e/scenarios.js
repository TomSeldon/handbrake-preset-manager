'use strict';

describe('Handbrake Preset Manager', function() {
    browser.get('http://localhost:3000/#/categories');

    it('should automatically redirect to the home page', function() {
        //expect(browser.getLocationAbsUrl()).toMatch('/categories');
    });
});
