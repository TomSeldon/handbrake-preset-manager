//'use strict';
//
//goog.provide('hpm.environment.Factory');
//
///**
// * @param {angular.$window} $window
// * @ngInject
// * @constructor
// */
//hpm.environment.Factory = function($window)
//{
//    var server = 'Express',
//
//        serviceRoot = $window.location.protocol +
//            '//' + $window.location.host + '/',
//
//        serviceName = 'breeze/hpm',
//
//        devServiceName = 'breeze/dev';
//
//    return {
//        get server() {
//            return server;
//        },
//
//        get serviceName() {
//            return serviceName;
//        },
//
//        get serviceRoot() {
//            return serviceRoot;
//        },
//
//        get devServiceName() {
//            return devServiceName;
//        }
//    };
//};
