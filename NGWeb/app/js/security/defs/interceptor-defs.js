(function () {
    'use strict';

    var AUTH_PREFIX_HEADER = 'Bearer';
    var AUTH_HEADER_DELIMITER = ' ';

    var definitions = {
        configureAuthenticationInterceptor: function (httpProvider) {
            if (httpProvider) {
                httpProvider.interceptors.push('ttAuthenticationInterceptor');
            }
        },
        authenticationInterceptorService: function (authenticationStorageService) {
            var serviceDefinition = {};

            if (authenticationStorageService) {
                serviceDefinition = {
                    request: function (configuration) {
                        configuration.headers = configuration.headers || {};

                        if (authenticationStorageService.isAuthTokenAvailable()) {
                            var authToken = authenticationStorageService.getAuthToken();

                            configuration.headers.Authorization =
                                AUTH_PREFIX_HEADER + AUTH_HEADER_DELIMITER + authToken;
                        }

                        return configuration;
                    }
                }
            }

            return serviceDefinition;
        }
    };

    module.exports = definitions;
})();