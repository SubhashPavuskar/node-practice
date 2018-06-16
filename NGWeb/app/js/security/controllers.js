(function () {
    'use strict';

    require('./services');

    var controllerRegUtils = require('../utilities/controller-reg-utils');
    var ngModuleName = 'com.tt.modules.security.controllers';
    var angular = require('angular');
    var definitions = require('./defs/controller-defs');

    var ngDependencies =
        [
            'com.tt.modules.security.services'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var controllers =
        [
            {
                name: 'loginPanelController',
                definition: [
                    '$scope',
                    '$rootScope',
                    '$state',
                    'authenticationService',
                    'authenticationStorageService',
                    definitions.loginPanelController
                ]
            }
        ];

    controllerRegUtils.registerControllers(moduleObject, controllers);
})();