(function () {
    'use strict';

    require('./services');

    var serviceRegUtils = require('../utilities/service-reg-utils');
    var ngModuleName = 'com.tt.modules.security.interceptors';
    var angular = require('angular');
    var definitions = require('./defs/interceptor-defs');

    var ngDependencies =
        [
            'com.tt.modules.security.services'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var interceptorServices =
        [
            {
                name: 'ttAuthenticationInterceptor',
                definition: [
                    'authenticationStorageService',
                    definitions.authenticationInterceptorService
                ]
            }
        ];

    var interceptorConfigurationDefinition =
        [
            '$httpProvider',
            definitions.configureAuthenticationInterceptor
        ];

    serviceRegUtils.registerFactories(moduleObject, interceptorServices);
    moduleObject.config(interceptorConfigurationDefinition);
})();