(function () {
    'use strict';

    require('./config');

    var filterRegUtils = require('../utilities/filter-reg-utils');
    var ngModuleName = 'com.tt.modules.crmsystem.filters';
    var angular = require('angular');
    var definitions = require('./defs/filter-defs');

    var ngDependencies =
        [
            'com.tt.modules.crmsystem.config'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);
    var filters =
        [
            {
                name: 'photoUrl',
                definition: [
                    'photoBaseUrl',
                    definitions.photoUrlFilter
                ]
            },
            {
                name: 'statusSymbol',
                definition: [
                    'symbols',
                    definitions.statusSymbolFilter
                ]
            },
            {
                name: 'stockHealthStatus',
                definition: [
                    'symbols',
                    definitions.stockHealthStatusFilter
                ]
            }
        ];

    filterRegUtils.registerFilters(moduleObject, filters);
})();