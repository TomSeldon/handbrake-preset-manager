

/**
 *@type {Function}
 */
module.exports = function()
{
    'use strict';

    this.Given(/^I am on the categories list page$/, function(done) {
        browser.get('http://localhost:3000/#/categories')
            .then(done);
    });

    this.Then(
        /^I should see a list of (\d+) categories$/,
        function(expectedCount, done) {
            element.all(by.css('.category'))
                .then(function(categories) {
                    var count = categories.length;

                    console.log(expectedCount);
                    console.log(count);
                    done();
                });
        }
    );
};
