(function () {
    'use strict';

    var definitions = {
        registerFactories: function (module, factories) {
            var validation = module && factories;

            if (validation) {
                for (var index in factories) {
                    var serviceEntry = factories[index];

                    module.factory(
                        serviceEntry.name,
                        serviceEntry.definition);
                }
            }
        },
        registerServices: function(module, services) {
            var validation = module && services;

            if (validation) {
                for (var index in services) {
                    var serviceEntry = services[index];

                    module.service(
                        serviceEntry.name,
                        serviceEntry.definition);
                }
            }
        }
    };

    module.exports = definitions;
})();