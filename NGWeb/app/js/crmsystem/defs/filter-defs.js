(function () {
    'use strict';

    var DEFAULT_FORMAT = 'JPG';
    var DEFAULT_THRESHOLD = 800;
    var SEPARATOR = '.';

    var definitions = {
        photoUrlFilter: function (photoBaseUrl) {
            var filterLogic = function (bindingValue, format) {
                var url = '';

                format = format || DEFAULT_FORMAT;

                if (photoBaseUrl && bindingValue) {
                    url = photoBaseUrl + '/Customer' +
                        bindingValue + SEPARATOR + format;
                }

                return url;
            };

            return filterLogic;
        },
        statusSymbolFilter: function (symbols) {
            return function (bindingValue) {
                return bindingValue ? symbols.check : symbols.cross;
            };
        },
        stockHealthStatusFilter: function() {
            return function(bindingValue, threshold) {
                threshold = threshold || DEFAULT_THRESHOLD;

                return bindingValue >= threshold;
            }
        }
    };

    module.exports = definitions;
})();