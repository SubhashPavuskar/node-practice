(function () {
    'use strict';

    var definitions = {
        createDirective: function (url, scope, controller) {
            var directive = {
                restrict: 'EA'
            };

            if (url) {
                directive.templateUrl = function () {
                    return url;
                }
            }

            if (scope) {
                directive.scope = scope;
            }

            if (controller) {
                directive.controller = controller;
            }

            return directive;
        }
    };

    module.exports = definitions;
})();