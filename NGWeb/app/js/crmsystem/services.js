(function () {
    'use strict';

    require('angular-resource');
    require('./config');

    var serviceRegUtils = require('../utilities/service-reg-utils');

    var ngModuleName = 'com.tt.modules.crmsystem.services';
    var angular = require('angular');
    var definitions = require('./defs/service-defs');

    var ngDependencies =
        [
            'ngResource',
            'com.tt.modules.crmsystem.config'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var services =
        [
            {
                name: 'customerService',
                definition: [
                    '$resource',
                    'crmSystemServiceUrls',
                    definitions.customerService
                ]
            },
            {
                name: 'orderService',
                definition: [
                    '$resource',
                    'crmSystemServiceUrls',
                    definitions.orderService
                ]
            },
            {
                name: 'orderChartDataTransformationService',
                definition: [
                    definitions.orderChartDataTransformationService
                ]
            },
            {
                name: 'stockQuotationService',
                definition: [
                    definitions.stockQuotationService
                ]
            }
        ];

    serviceRegUtils.registerFactories(moduleObject, services);
})();