(function () {
    'use strict';

    var definitions = {
        initializeSecurityModule: function (logger, globalViewModel, authenticationStorageService) {
            var validation = logger && globalViewModel && authenticationStorageService;

            if (validation) {
                if (authenticationStorageService.isAuthTokenAvailable()) {
                    authenticationStorageService.unsetAuthToken();
                }

                globalViewModel.isAuthenticated = false;

                logger.info('Security Module Initialized!');
            }
        }
    };

    module.exports = definitions;
})();