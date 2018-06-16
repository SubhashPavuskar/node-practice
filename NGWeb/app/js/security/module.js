(function () {
    'use strict';

    require('./services');
    require('./directives');
    require('./interceptors');

    var ngModuleName = 'com.tt.modules.security';
    var angular = require('angular');
    var definitions = require('./defs/module-defs');

    var ngDependencies =
        [
            'com.tt.modules.security.services',
            'com.tt.modules.security.directives',
            'com.tt.modules.security.interceptors'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var securityModuleInitializerDefinition =
        [
            '$log',
            '$rootScope',
            'authenticationStorageService',
            definitions.initializeSecurityModule
        ];
    
    moduleObject.run(securityModuleInitializerDefinition);
})();