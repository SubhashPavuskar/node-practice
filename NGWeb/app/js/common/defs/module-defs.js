(function () {
    'use strict';

    var definitions = {
        initializeCommonModule: function (logger) {
            if (logger) {
                logger.info('Common Module Initialized!');
            }
        }
    };

    module.exports = definitions;
})();