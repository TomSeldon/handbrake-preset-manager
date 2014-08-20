'use strict';

describe('Handbrake Preset Manager', function() {
    browser.get('index.html');

    it('should automatically redirect to the home page', function() {
        expect(browser.getLocationAbsUrl()).toMatch('/home');
    });
});
