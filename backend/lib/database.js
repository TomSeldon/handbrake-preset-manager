'use strict';

var MongoClient = require('mongodb').MongoClient,
    db = null,
    mongoUrl = '',
    mongoOptions = {
        server: {
            autoConnect: true
        }
    };

/**
 * @type {getDb}
 */
exports.getDb = getDb;

/**
 * @param {Function} next
 */
function getDb(next) {
    if (db) {
        next(null, db);
    } else {
        MongoClient.connect(mongoUrl, mongoOptions, function(err, db_) {
            db = db_;
            next(null, db);
        });
    }
}
