(function () {
    'use strict';

    var definitions = {
        registerDirectives: function (module, directives) {
            var validation = module && directives;

            if (validation) {
                for (var index in directives) {
                    var dirRegistrationEntry = directives[index];

                    module.directive(
                        dirRegistrationEntry.name,
                        dirRegistrationEntry.definition);
                }
            }
        }
    };

    module.exports = definitions;
})();