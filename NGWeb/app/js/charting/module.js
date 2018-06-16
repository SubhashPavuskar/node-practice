(function () {
    'use strict';

    window.d3 = require('d3');

    require('./directives');

    var ngModuleName = 'com.tt.modules.charting';
    var angular = require('angular');
    var definitions = require('./defs/module-defs');

    var ngDependencies =
        [
            'com.tt.modules.charting.directives'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var chartingModuleInitializerDefinition =
        [
            '$log',
            definitions.initializeChartingModule
        ];

    moduleObject.run(chartingModuleInitializerDefinition);
})();