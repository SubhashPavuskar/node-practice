(function () {
    'use strict';

    var definitions = {
        initializeApp: function (logger, globalViewModel) {
            var validation = logger && globalViewModel;

            if (validation) {
                globalViewModel.appInitTime = new Date();

                logger.info('Application Initialized!');
            }
        },
        bootstrapApp: function (moduleName) {
            var angular = require('angular');

            angular.element(document)
                .ready(function () {
                    angular.bootstrap(document, [moduleName]);
                });
        },
        configureSeoSettings: function (locationProvider) {
            if (locationProvider) {
                locationProvider.html5Mode(true);
            }
        }
    };

    module.exports = definitions;
})();