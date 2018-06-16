(function () {
    'use strict';

    var routerRegUtils = require('../../utilities/router-reg-utils');

    var definitions = {
        configureCommonRouter: function (stateProvider, urlRouterProvider, templateUrls) {
            var validation = stateProvider && urlRouterProvider && templateUrls;

            if (validation) {
                var states = [
                    {
                        name: 'home',
                        url: '/home',
                        templateUrl: templateUrls.home,
                        controller: 'HomeViewController',
                        controllerAs: 'homeViewControllerObject'
                    },
                    {
                        name: 'about',
                        url: '/about',
                        templateUrl: templateUrls.about,
                        controller: 'AboutViewController',
                        controllerAs: 'aboutViewControllerObject'
                    }
                ];

                routerRegUtils.registerStates(stateProvider, states);

                urlRouterProvider.otherwise('/home');
            }
        }
    };

    module.exports = definitions;
})();