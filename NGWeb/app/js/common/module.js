(function () {
    'use strict';

    require('../security/module');
    require('./directives');
    require('./routes');
    require('./decorators');

    var ngModuleName = 'com.tt.modules.common';
    var angular = require('angular');
    var definitions = require('./defs/module-defs');

    var ngDependencies =
        [
            'com.tt.modules.security',
            'com.tt.modules.common.directives',
            'com.tt.modules.common.routes',
            'com.tt.modules.common.decorators'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var moduleInitializerDefinition =
        [
            '$log',
            definitions.initializeCommonModule
        ];

    moduleObject.run(moduleInitializerDefinition);
})();