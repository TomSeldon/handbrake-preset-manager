'use strict';

var MongoClient = require('mongodb').MongoClient,
    db = null,
    config = require('../../config'),
    mongoOptions = {
        'server': {
            'auto_reconnect': true
        }
    };

/**
 * @type {Function}
 */
exports.getDb = getDb;

/**
 * @param {Function} next
 */
function getDb(next) {
    console.log('here');
    if (db) {
        next(null, db);
    } else {
        MongoClient.connect(
            config.database.connectionString,

            mongoOptions,

            function(err, db_) {
                if (err) {
                    var defaultMsg = 'Is the MongoDb server running?';

                    err.message = err.message || defaultMsg;

                    next(err, null);
                } else {
                    db = db_;
                    next(null, db);
                }
            }
        );
    }
}
