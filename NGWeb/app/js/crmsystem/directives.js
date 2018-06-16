(function () {
    'use strict';

    require('./config');

    var directiveRegUtils = require('../utilities/directive-reg-utils');
    var ngModuleName = 'com.tt.modules.crmsystem.directives';
    var angular = require('angular');
    var definitions = require('./defs/directive-defs');

    var ngDependencies =
        [
            'com.tt.modules.crmsystem.config'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var directives =
        [
            {
                name: 'ttCustomerThumbnailViewer',
                definition: [
                    'crmSystemDirTemplateUrls',
                    definitions.customerThumbnailViewerDirective
                ]
            },
            {
                name: 'ttCustomerSearchPanel',
                definition: [
                    'crmSystemDirTemplateUrls',
                    definitions.customerSearchPanelDirective
                ]
            },
            {
                name: 'ttCustomerDetailViewer',
                definition: [
                    'crmSystemDirTemplateUrls',
                    definitions.customerDetailViewerDirective
                ]
            },
            {
                name: 'ttOrderViewer',
                definition: [
                    'crmSystemDirTemplateUrls',
                    definitions.orderViewerDirective
                ]
            },
            {
                name: 'ttStockViewer',
                definition: [
                    'crmSystemDirTemplateUrls',
                    definitions.stockViewerDirective
                ]
            },
            {
                name: 'ttStockQuoteHistoryViewer',
                definition: [
                    'crmSystemDirTemplateUrls',
                    definitions.stockQuoteHistoryViewerDirective
                ]
            },
            {
                name: 'ttDashboardSwitchPanel',
                definition: [
                    'crmSystemDirTemplateUrls',
                    definitions.dashboardSwitchPanelDirective
                ]
            },
            {
                name: 'ttNewCustomerForm',
                definition: [
                    'crmSystemDirTemplateUrls',
                    definitions.newCustomerFormDirective
                ]
            },
            {
                name: 'ttCreditLimitValidation',
                definition: [
                    definitions.creditLimitValidationDirective
                ]
            }
        ];

    directiveRegUtils.registerDirectives(moduleObject, directives);
})();