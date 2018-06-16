(function () {
    'use strict';

    var ngModuleName = 'com.tt.modules.crmsystem.config';
    var angular = require('angular');
    var ngDependencies = [];
    var moduleObject = angular.module(ngModuleName, ngDependencies);

    moduleObject.constant('crmSystemViewTemplateUrls', {
        crmSystemHome: 'js/crmsystem/partials/views/crm-system-home-view.html',
        crmSystemDashboardHome: 'js/crmsystem/partials/views/crm-system-dashboard-home-view.html',
        newCustomerHome: 'js/crmsystem/partials/views/new-customer-home-view.html'
    });

    moduleObject.constant('crmSystemDirTemplateUrls', {
        customerThumbnailViewer: 'js/crmsystem/partials/directives/customer-thumbnail-viewer.html',
        customerSearchPanel: 'js/crmsystem/partials/directives/customer-search-panel.html',
        customerDetailViewer: 'js/crmsystem/partials/directives/customer-detail-viewer.html',
        orderViewer: 'js/crmsystem/partials/directives/order-viewer.html',
        stockViewer: 'js/crmsystem/partials/directives/stock-viewer.html',
        stockQuoteHistoryViewer: 'js/crmsystem/partials/directives/stock-quote-history-viewer.html',
        dashboardSwitchPanel: 'js/crmsystem/partials/directives/dashboard-switch-panel.html',
        newCustomerForm: 'js/crmsystem/partials/directives/new-customer-form.html'
    });

    moduleObject.constant('crmSystemServiceUrls', {
        baseUrl: '/api',
        customers: {
            baseUrl: '/customers',
            queryAndSave: '/:customerId'
        },
        orders: {
            baseUrl: '/orders',
            queryByCustomer: '/:customerId'
        }
    });

    moduleObject.constant('photoBaseUrl', '/images/people');
    moduleObject.constant('symbols', {
        check: '\u2713',
        cross: '\u2718'
    });

    moduleObject.constant('crmSystemEvents', {
        DASHBOARD_SWITCH_EVENT: 'crmSystemDashboardSwitchEvent'
    });
})();