(function () {
    'use strict';

    require('./services');

    var ngModuleName = 'com.tt.modules.common.decorators';
    var angular = require('angular');
    var definitions = require('./defs/decorator-defs');

    var ngDependencies =
        [
            'com.tt.modules.common.services'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var decoratorConfigurationDefinition =
        [
            '$provide',
            definitions.configureServiceDecorators
        ];

    moduleObject.config(decoratorConfigurationDefinition);
})();