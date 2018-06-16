(function () {
    'use strict';

    require('jquery-browserify');
    require('bootstrap');
    require('./building-blocks/module');
    require('./common/module');
    require('./crmsystem/module');

    var ngModuleName = 'com.tt.app';
    var angular = require('angular');
    var definitions = require('./defs/main-defs');

    var ngDependencies =
        [
            'com.tt.modules.building-blocks',
            'com.tt.modules.common',
            'com.tt.modules.crmsystem'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var appInitializerDefinition =
        [
            '$log',
            '$rootScope',
            definitions.initializeApp
        ];

    var seoSettingsConfiguration =
        [
            '$locationProvider',
            definitions.configureSeoSettings
        ];

    moduleObject.run(appInitializerDefinition);

    moduleObject.config(seoSettingsConfiguration);

    definitions.bootstrapApp(ngModuleName);
})();