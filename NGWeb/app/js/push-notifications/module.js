(function () {
    'use strict';

    require('./services');

    var ngModuleName = 'com.tt.modules.push-notifications';
    var angular = require('angular');
    var definitions = require('./defs/module-defs');

    var ngDependencies =
        [
            'com.tt.modules.push-notifications.services'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var notificationModuleInitializerDefinition =
        [
            '$log',
            definitions.initializeNotificationModule
        ];

    moduleObject.run(notificationModuleInitializerDefinition);
})();