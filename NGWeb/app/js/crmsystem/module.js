(function () {
    'use strict';

    require('ngRadialGauge');
    require('../push-notifications/module');
    require('../charting/module');
    require('./routes');
    require('./directives');
    require('./filters');

    var ngModuleName = 'com.tt.modules.crmsystem';
    var angular = require('angular');
    var definitions = require('./defs/module-defs');

    var ngDependencies =
        [
            'ngRadialGauge',
            'com.tt.modules.push-notifications',
            'com.tt.modules.charting',
            'com.tt.modules.crmsystem.directives',
            'com.tt.modules.crmsystem.filters',
            'com.tt.modules.crmsystem.routes'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var crmSystemModuleInitializerDefinition =
        [
            '$log',
            definitions.initializeCrmSystemModule
        ];

    moduleObject.run(crmSystemModuleInitializerDefinition);
})();