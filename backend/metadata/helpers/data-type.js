'use strict';

var breeze = require('breeze-serverside'),
    ObjectID = require('mongodb').ObjectID;

/**
 * Regster cusotm DataType objects with Breeze.
 */
exports.registerDataTypes = function()
{
    registerMongoObjectID();
};

/**
 * Register MongoObjectId DataType.
 */
function registerMongoObjectID() {
    function fmtOData(val) {
        return val === null ? null : "'" + val + "'";
    }

    function getNextObjectID() {
        return new ObjectID();
    }

    breeze.DataType.MongoObjectId = breeze.DataType.addSymbol(
        {
            defaultValue: '',
            fmtOData: fmtOData,
            getNext: getNextObjectID
        }
    );
}
