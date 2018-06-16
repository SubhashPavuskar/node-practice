(function () {
    'use strict';

    var definitions = {
        registerFilters: function (module, directives) {
            var validation = module && directives;

            if (validation) {
                for (var index in directives) {
                    var dirRegistrationEntry = directives[index];

                    module.filter(
                        dirRegistrationEntry.name,
                        dirRegistrationEntry.definition);
                }
            }
        }
    };

    module.exports = definitions;
})();