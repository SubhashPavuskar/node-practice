(function () {
    'use strict';

    require('./services');

    var controllerRegUtils = require('../utilities/controller-reg-utils');
    var ngModuleName = 'com.tt.modules.crmsystem.controllers';
    var angular = require('angular');
    var definitions = require('./defs/controller-defs');

    var ngDependencies =
        [
            'com.tt.modules.crmsystem.services'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var controllers =
        [
            {
                name: 'CrmSystemHomeViewController',
                definition: [
                    '$rootScope',
                    'customerService',
                    'PushNotificationService',
                    definitions.CrmSystemHomeViewController
                ]
            },
            {
                name: 'CrmSystemDashboardHomeViewController',
                definition: [
                    '$rootScope',
                    '$q',
                    '$state',
                    '$stateParams',
                    'customerService',
                    'orderService',
                    'orderChartDataTransformationService',
                    'crmSystemEvents',
                    definitions.CrmSystemDashboardHomeViewController
                ]
            },
            {
                name: 'StockViewerController',
                definition: [
                    '$scope',
                    '$window',
                    '$interval',
                    'stockQuotationService',
                    definitions.StockViewerController
                ]
            },
            {
                name: 'DashboardSwitchPanelController',
                definition: [
                    '$scope',
                    'crmSystemEvents',
                    definitions.DashboardSwitchPanelController
                ]
            },
            {
                name: 'NewCustomerHomeViewController',
                definition: [
                    definitions.NewCustomerHomeViewController
                ]
            },
            {
                name: 'NewCustomerFormController',
                definition: [
                    '$scope',
                    'customerService',
                    definitions.NewCustomerFormController
                ]
            }
        ];

    controllerRegUtils.registerControllers(moduleObject, controllers);
})();
