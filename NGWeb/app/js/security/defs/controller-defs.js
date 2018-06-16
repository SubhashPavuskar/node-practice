(function () {
    'use strict';

    var AUTHENTICATED = true;
    var UNAUTHENTICATED = false;
    var HOME_STATE = 'home';

    var viewModelErrorUtils = require('../../utilities/viewmodel-error-utils');

    var definitions = {
        loginPanelController: function (viewModel, globalViewModel, stateService,
                                        authenticationService, authenticationStorageService) {
            var validation = viewModel && globalViewModel && stateService &&
                authenticationService && authenticationStorageService;

            if (validation) {
                var refreshAuthStatus = function (status) {
                    viewModel.authStatus = status;
                    globalViewModel.authStatus = status;
                };

                viewModel.authStatus = false;

                viewModel.login = function () {
                    authenticationService.authenticate(viewModel.userName, viewModel.password)
                        .then(
                            function (result) {
                                if (result && result.token) {
                                    authenticationStorageService.setAuthToken(result.token);
                                    refreshAuthStatus(AUTHENTICATED);
                                }
                            },
                            function (error) {
                                viewModelErrorUtils.handleError(viewModel, error);
                            });
                };

                viewModel.logout = function () {
                    authenticationStorageService.unsetAuthToken();
                    refreshAuthStatus(UNAUTHENTICATED);
                    stateService.go(HOME_STATE);
                };
            }
        }
    };

    module.exports = definitions;
})();