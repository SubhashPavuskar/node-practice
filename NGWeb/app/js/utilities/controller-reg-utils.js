(function () {
    'use strict';

    var definitions = {
        registerControllers: function (module, controllers) {
            var validation = module && controllers;

            if (validation) {
                for (var index in controllers) {
                    var controllerEntry = controllers[index];

                    module.controller(
                        controllerEntry.name,
                        controllerEntry.definition);
                }
            }
        }
    };

    module.exports = definitions;
})();