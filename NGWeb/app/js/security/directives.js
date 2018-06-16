(function () {
    'use strict';

    require('./config');
    require('./controllers');

    var directiveRegUtils = require('../utilities/directive-reg-utils');

    var ngModuleName = 'com.tt.modules.security.directives';
    var angular = require('angular');
    var definitions = require('./defs/directive-defs');

    var ngDependencies =
        [
            'com.tt.modules.security.config',
            'com.tt.modules.security.controllers'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var directives =
        [
            {
                name: 'ttLoginPanel',
                definition: [
                    'securityDirTemplateUrls',
                    definitions.loginPanelDirective
                ]
            }
        ];

    directiveRegUtils.registerDirectives(moduleObject, directives);
})();