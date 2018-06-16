(function () {
    'use strict';

    var definitions = {
        registerStates: function (stateProvider, states) {
            var validation = stateProvider && states;

            if (validation) {
                for (var index in states) {
                    var stateEntry = states[index];

                    stateProvider.state(stateEntry.name, {
                        url: stateEntry.url,
                        templateUrl: stateEntry.templateUrl,
                        controller: stateEntry.controller,
                        controllerAs: stateEntry.controllerAs
                    });
                }
            }
        }
    };

    module.exports = definitions;
})();