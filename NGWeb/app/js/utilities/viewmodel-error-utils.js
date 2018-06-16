(function () {
    'use strict';

    var definitions = {
        handleError: function (viewModel, error) {
            if (viewModel && error) {
                viewModel.errorMessage = 'Error Occurred, Details : ' +
                    JSON.stringify(error);

                throw error;
            }
        }
    };

    module.exports = definitions;
})();