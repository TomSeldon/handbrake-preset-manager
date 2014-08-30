'use strict';

var breeze = require('breeze-serverside'),
    propertyMap;

/**
 * @type {Object}
 */
propertyMap = {

    serverToClient: {
        _id: 'id'
    },

    clientToServer: {
        id: '_id'
    }

};

/**
 * Naming convention that maps client <-> server property names.
 *
 * @return {breeze.NamingConvention}
 */
exports.createNamingConvention = function()
{
    return new breeze.NamingConvention(
        {
            serverPropertyNameToClient: function(serverPropertyName) {
                var map = propertyMap.serverToClient;

                if (map.hasOwnProperty(serverPropertyName)) {
                    return map[serverPropertyName];
                } else {
                    return serverPropertyName;
                }
            },

            clientPropertyNameToServer: function(clientPropertyName) {
                var map = propertyMap.clientToServer;

                if (map.hasOwnProperty(clientPropertyName)) {
                    return map[clientPropertyName];
                } else {
                    return clientPropertyName;
                }
            }
        }
    );
};
