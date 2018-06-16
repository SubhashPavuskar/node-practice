(function () {
    'use strict';

    var definitions = {
        authenticationStorageService: function (browser, authTokenInfo) {
            var serviceDefinition = {};
            var validation = browser && authTokenInfo;

            if (validation) {
                serviceDefinition = {
                    setAuthToken: function (authToken) {
                        browser.localStorage.setItem(authTokenInfo.tokenKey, authToken);
                    },
                    isAuthTokenAvailable: function () {
                        var authToken = this.getAuthToken();

                        return authToken != null;
                    },
                    unsetAuthToken: function () {
                        browser.localStorage.removeItem(authTokenInfo.tokenKey);
                    },
                    getAuthToken: function () {
                        return browser.localStorage.getItem(authTokenInfo.tokenKey);
                    }
                };
            }

            return serviceDefinition;
        },
        authenticationService: function (restService, serviceUrl) {
            var serviceDefinition = {};
            var validation = restService && serviceUrl;

            if (validation) {
                var authenticationRestService = restService(serviceUrl);

                serviceDefinition = {
                    authenticate: function (userName, password) {
                        return authenticationRestService.save({
                            userName: userName,
                            password: password
                        }).$promise;
                    }
                };
            }

            return serviceDefinition;
        }
    };

    module.exports = definitions;
})();