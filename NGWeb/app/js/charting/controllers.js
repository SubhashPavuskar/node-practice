(function () {
    'use strict';

    var controllerRegUtils = require('../utilities/controller-reg-utils');
    var ngModuleName = 'com.tt.modules.charting.controllers';
    var angular = require('angular');
    var definitions = require('./defs/controller-defs');
    var ngDependencies = [];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var controllers =
        [
            {
                name: 'ChartRendererController',
                definition: [
                    '$scope',
                    definitions.ChartRendererController
                ]
            }
        ];

    controllerRegUtils.registerControllers(moduleObject, controllers);
})();