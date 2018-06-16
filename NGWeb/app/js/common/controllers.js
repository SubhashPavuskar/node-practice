(function () {
    'use strict';

    require('./services');

    var controllerRegUtils = require('../utilities/controller-reg-utils');

    var ngModuleName = 'com.tt.modules.common.controllers';
    var angular = require('angular');
    var definitions = require('./defs/controller-defs');

    var ngDependencies =
        [
            'com.tt.modules.common.services'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var controllers = [
        {
            name: 'HomeViewController',
            definition: [
                'subHeadingService',
                definitions.HomeViewController
            ]
        },
        {
            name: 'AboutViewController',
            definition: [
                definitions.AboutViewController
            ]
        },
        {
            name: 'navigationPanelController',
            definition: [
                '$scope',
                '$rootScope',
                definitions.navigationPanelController
            ]
        }
    ];

    controllerRegUtils.registerControllers(moduleObject, controllers);
})();