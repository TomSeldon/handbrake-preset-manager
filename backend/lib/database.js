'use strict';

var MongoClient = require('mongodb').MongoClient,
    db = null,
    config = require('../../config'),
    mongoOptions = {
        server: {
            autoConnect: true
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
    if (db) {
        next(null, db);
    } else {
        MongoClient.connect(
            config.database.connectionString,
            mongoOptions,
            function(err, db_) {
                db = db_;
                next(null, db);
            }
        );
    }
}
