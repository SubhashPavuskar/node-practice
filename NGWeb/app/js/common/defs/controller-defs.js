(function () {
    'use strict';

    var viewModelErrorUtils = require('../../utilities/viewmodel-error-utils');

    function HomeViewController(subHeadingService) {
        var viewModel = this;

        var validation = viewModel && subHeadingService;

        if (validation) {
            subHeadingService.getSubHeadings()
                .then(
                    function (data) {
                        if (data) {
                            viewModel.subHeadings = data;
                        }
                    },
                    function (error) {
                        viewModelErrorUtils.handleError(viewModel, error);
                    });
        }
    }

    function AboutViewController() {
    }

    function navigationPanelController(viewModel, globalViewModel) {
        var validation = viewModel && globalViewModel;

        if (validation) {
            viewModel.authStatus = false;
            
            globalViewModel.$watch('isAuthenticated',
                function (newValue) {
                    viewModel.authStatus = newValue;
                })
        }
    }

    var definitions = {
        HomeViewController: HomeViewController,
        AboutViewController: AboutViewController,
        navigationPanelController: navigationPanelController
    };

    module.exports = definitions;
})();