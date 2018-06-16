(function () {
    'use strict';

    require('./config');
    require('./controllers');

    var directiveRegUtils = require('../utilities/directive-reg-utils');

    var ngModuleName = 'com.tt.modules.common.directives';
    var angular = require('angular');
    var definitions = require('./defs/directive-defs');

    var ngDependencies =
        [
            'com.tt.modules.common.config',
            'com.tt.modules.common.controllers'
        ];

    var moduleObject = angular.module(ngModuleName, ngDependencies);

    var directives =
        [
            {
                name: 'ttCommonHeader',
                definition: [
                    'commonDirTemplateUrls',
                    definitions.headerDirective
                ]
            },
            {
                name: 'ttCommonNavigationPanel',
                definition: [
                    'commonDirTemplateUrls',
                    definitions.navigationPanelDirective
                ]
            },
            {
                name: 'ttCommonFooter',
                definition: [
                    'commonDirTemplateUrls',
                    definitions.footerDirective
                ]
            },
            {
                name: 'ttSubHeadingViewer',
                definition: [
                    'commonDirTemplateUrls',
                    definitions.subHeadingViewerDirective
                ]
            }
        ];
    
    directiveRegUtils.registerDirectives(moduleObject, directives);
})();