(function () {
    'use strict';

    var directiveUtils = require('../../utilities/directive-utils');
    var definitions = {
        customerThumbnailViewerDirective: function (templateUrls) {
            var scope = {
                customerInfo: '='
            };

            return directiveUtils.createDirective(templateUrls.customerThumbnailViewer, scope);
        },
        customerSearchPanelDirective: function (templateUrls) {
            var scope = {
                searchString: '='
            };

            return directiveUtils.createDirective(templateUrls.customerSearchPanel, scope);
        },
        customerDetailViewerDirective: function (templateUrls) {
            var scope = {
                customerDetail: '='
            };

            return directiveUtils.createDirective(templateUrls.customerDetailViewer, scope);
        },
        orderViewerDirective: function (templateUrls) {
            var scope = {
                ordersList: '='
            };

            return directiveUtils.createDirective(templateUrls.orderViewer, scope);
        },
        stockViewerDirective: function (templateUrls) {
            var scope = {
                customerInfo: '=',
                refreshInterval: '@'
            };

            var controller = 'StockViewerController';

            return directiveUtils.createDirective(templateUrls.stockViewer, scope, controller);
        },
        stockQuoteHistoryViewerDirective: function (templateUrls) {
            var scope = {
                historyList: '='
            };

            return directiveUtils.createDirective(templateUrls.stockQuoteHistoryViewer, scope);
        },
        dashboardSwitchPanelDirective: function (templateUrls) {
            var scope = null;
            var controller = 'DashboardSwitchPanelController';

            return directiveUtils.createDirective(templateUrls.dashboardSwitchPanel, scope, controller);
        },
        newCustomerFormDirective: function (templateUrls) {
            var scope = null;
            var controller = 'NewCustomerFormController';

            return directiveUtils.createDirective(templateUrls.newCustomerForm, scope, controller);
        },
        creditLimitValidationDirective: function () {
            var templateUrl = null;
            var scope = {
                minimum: '=',
                maximum: '='
            };

            var directive = directiveUtils.createDirective(templateUrl, scope);

            directive.require = 'ngModel';
            directive.link = function (viewModel, element, attributes, model) {
                model.$validators.ttCreditLimitValidation =
                    function (modelValue) {
                        var status = false;

                        if (modelValue) {
                            status = modelValue >= viewModel.minimum &&
                                modelValue <= viewModel.maximum;
                        }

                        return status;
                    };
            };

            return directive;
        }
    };

    module.exports = definitions;
})();