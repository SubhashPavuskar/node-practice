(function () {
    'use strict';

    var definitions = {
        initializeCrmSystemModule: function (logger) {
            if (logger) {
                logger.info('CRM System Module Initialized!');
            }
        }
    };

    module.exports = definitions;
})();