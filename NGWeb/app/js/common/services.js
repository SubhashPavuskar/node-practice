(function () {
    'use strict';

    require('angular-resource');
    require('./config');

    var ngModuleName = 'com.tt.modules.common.services';
    var angular = require('angular');
    var definitions = require('./defs/service-defs');

    var ngDependencies =
        [
            'ngResource',
            'com.tt.modules.common.config'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var subHeadingServiceDefinition =
        [
            '$resource',
            'subHeadingServiceUrl',
            definitions.subHeadingService
        ];

    moduleObject.factory('subHeadingService', subHeadingServiceDefinition);
})();