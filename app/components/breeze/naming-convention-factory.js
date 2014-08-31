'use strict';

/**
 * @fileoverview
 *
 * Factory for returning Breeze naming convention object.
 */

goog.provide('hpm.breeze.namingconvention.Factory');

/**
 * Create Breeze Naming Convention.
 *
 * @ngInject
 * @param {breeze} breeze
 * @return {{createNamingConvention: Function}}
 */
hpm.breeze.namingconvention.Factory = function(breeze)
{
    var propertyMap = hpm.breeze.namingconvention.Factory.propertyMap;

    return {
        /**
         * @expose
         * @return {breeze.NamingConvention}
         */
        createNamingConvention: function() {
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
        }
    };
};

/**
 * Client -> Server and Server -> Client property name map.
 *
 * @type {{serverToClient: {Object, clientToServer: {Object}}}
 */
hpm.breeze.namingconvention.Factory.propertyMap = {

    serverToClient: {
        _id: 'id'
    },

    clientToServer: {
        id: '_id'
    }

};
