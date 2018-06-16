(function () {
    'use strict';

    require('./controllers');

    var directiveRegUtils = require('../utilities/directive-reg-utils');
    var ngModuleName = 'com.tt.modules.charting.directives';
    var angular = require('angular');
    var definitions = require('./defs/directive-defs');

    var ngDependencies =
        [
            'com.tt.modules.charting.controllers'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var directives =
        [
            {
                name: 'ttChartRenderer',
                definition: [
                    definitions.chartRendererDirective
                ]
            }
        ];

    directiveRegUtils.registerDirectives(moduleObject, directives);
})();