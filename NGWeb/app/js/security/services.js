(function () {
    'use strict';

    var angular = require('angular');

    require('angular-resource');
    require('./config');

    var serviceRegUtils = require('../utilities/service-reg-utils');
    var ngModuleName = 'com.tt.modules.security.services';
    var definitions = require('./defs/service-defs');

    var ngDependencies =
        [
            'ngResource',
            'com.tt.modules.security.config'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var factories =
        [
            {
                name: 'authenticationStorageService',
                definition: [
                    '$window',
                    'authTokenInfo',
                    definitions.authenticationStorageService
                ]
            },
            {
                name: 'authenticationService',
                definition: [
                    '$resource',
                    'authenticationServiceUrl',
                    definitions.authenticationService
                ]
            }
        ];

    serviceRegUtils.registerFactories(moduleObject, factories);
})();