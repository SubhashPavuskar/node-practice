(function () {
    'use strict';

    var definitions = {
        initializeNotificationModule: function (logger) {
            if (logger) {
                logger.info('Push Notifications Module Initialized!');
            }
        }
    };

    module.exports = definitions;
})();