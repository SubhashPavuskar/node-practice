(function () {
    'use strict';

    var serviceRegUtils = require('../utilities/service-reg-utils');
    var ngModuleName = 'com.tt.modules.push-notifications.services';
    var angular = require('angular');
    var definitions = require('./defs/service-defs');
    var ngDependencies = [];
    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var factories =
        [
            {
                name: 'notificationUrlProvider',
                definition: [
                    '$window',
                    definitions.notificationUrlProviderService
                ]
            }
        ];

    var services = [
        {
            name: 'PushNotificationService',
            definition: [
                'notificationUrlProvider',
                definitions.PushNotificationService
            ]
        }
    ];

    serviceRegUtils.registerFactories(moduleObject, factories);
    serviceRegUtils.registerServices(moduleObject, services);
})();