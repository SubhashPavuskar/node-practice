(function () {
    'use strict';

    var ngModuleName = 'com.tt.modules.security.config';
    var angular = require('angular');
    var ngDependencies = [];
    var moduleObject = angular.module(ngModuleName, ngDependencies);

    moduleObject.constant('securityDirTemplateUrls', {
        loginPanel: 'js/security/partials/directives/login-panel.html'
    });

    moduleObject.constant('authenticationServiceUrl', '/authenticate');
    moduleObject.constant('authTokenInfo', {
        tokenKey: 'tt-authtokenkey'
    });
})();