'use strict';

var chai = require('chai'),
    expect = chai.expect;

/**
 * @constructor
 * @type {Function}
 */
module.exports = function()
{
    this.Given(/^The database is clean$/, function(callback) {
        // Write code here that turns the phrase above into concrete actions
        callback.pending();
    });

    this.Given(
        /^There are the following categories:$/,
        function(table, callback) {
            for (var i = 0, l = table.rows().length; i < l; i += 1) {
                var category = table.rows()[i][0];

                console.log(category);
            }

            callback.pending();
        }
    );

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

                    expect(count).to.equal(expectedCount);
                    done();
                });
        }
    );
};
