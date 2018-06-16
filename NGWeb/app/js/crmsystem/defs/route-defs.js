(function () {
    'use strict';

    var routerRegUtils = require('../../utilities/router-reg-utils');

    var definitions = {
        configureCrmSystemRouter: function (stateProvider, templateUrls) {
            var validation = stateProvider && templateUrls;

            if (validation) {
                var states =
                    [
                        {
                            name: 'crmSystemHome',
                            url: '/crm-system-home',
                            templateUrl: templateUrls.crmSystemHome,
                            controller: 'CrmSystemHomeViewController',
                            controllerAs: 'crmSystemHomeViewControllerObject'
                        },
                        {
                            name: 'crmSystemDashboardHome',
                            url: '/crm-system-home/:customerId',
                            templateUrl: templateUrls.crmSystemDashboardHome,
                            controller: 'CrmSystemDashboardHomeViewController',
                            controllerAs: 'crmSystemDashboardHomeViewControllerObject'
                        },
                        {
                            name: 'newCustomerHome',
                            url: '/new-customer-home',
                            templateUrl: templateUrls.newCustomerHome,
                            controller: 'NewCustomerHomeViewController',
                            controllerAs: 'newCustomerHomeViewControllerObject'
                        }
                    ];

                routerRegUtils.registerStates(stateProvider, states);
            }
        }
    };

    module.exports = definitions;
})();