(function () {
    'use strict';

    require('angular-ui-router');
    require('./config');
    require('./controllers');

    var ngModuleName = 'com.tt.modules.common.routes';
    var angular = require('angular');
    var definitions = require('./defs/route-defs');

    var ngDependencies =
        [
            'ui.router',
            'com.tt.modules.common.config',
            'com.tt.modules.common.controllers'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var commonRouterConfigurationDefinition =
        [
            '$stateProvider',
            '$urlRouterProvider',
            'commonViewTemplateUrls',
            definitions.configureCommonRouter
        ];

    moduleObject.config(commonRouterConfigurationDefinition);
})();