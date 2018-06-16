(function () {
    'use strict';

    var DEFAULT_VALUE_UNIT = '₹ ';
    var DEFAULT_PRECISION = 2;
    var DEFAULT_COLOR_RANGES = [
        {
            min: 0,
            max: 1.5,
            color: '#DEDEDE'
        },
        {
            min: 1.5,
            max: 2.5,
            color: '#8DCA2F'
        },
        {
            min: 2.5,
            max: 3.5,
            color: '#FDC702'
        },
        {
            min: 3.5,
            max: 4.5,
            color: '#FF7700'
        },
        {
            min: 4.5,
            max: 6.0,
            color: '#C50200'
        }
    ];
    var DEFAULT_LOWER_LIMIT = 0;
    var DEFAULT_UPPER_LIMIT = 6;
    var DASHBOARD_HOME_STATE = 'crmSystemDashboardHome';
    var PHONE_PATTERN = /^\d{5}-\d{5}$/;
    var CREDIT_LIMITS = {
        minimumLimit: 1000,
        maximumLimit: 50000
    };
    var NOTIFICATION_EVENT_NAME = 'newCustomerRecord';

    var viewModelErrorUtils = require('../../utilities/viewmodel-error-utils');

    function CrmSystemHomeViewController(globalViewModel, customerService, pushNotificationService) {
        var viewModel = this;
        var validation = globalViewModel && customerService && pushNotificationService;

        if (validation) {

            pushNotificationService.registerCallback(NOTIFICATION_EVENT_NAME,
                function (notificationData) {
                    var newCustomerRecord = notificationData;

                    if (newCustomerRecord && viewModel.customers) {
                        globalViewModel.$apply(
                            function () {
                                viewModel.customers.push(newCustomerRecord);
                            });
                    }
                });

            customerService.getCustomers()
                .then(
                    function (data) {
                        if (data) {
                            viewModel.customers = data;
                        }
                    },
                    function (error) {
                        viewModelErrorUtils.handleError(viewModel, error);
                    });
        }
    }

    function CrmSystemDashboardHomeViewController(globalViewModel, promiseService, stateService,
                                                  stateParameters, customerService, orderService,
                                                  orderChartDataTransformationService, crmSystemEvents) {
        var viewModel = this;
        var validation = globalViewModel && promiseService && stateParameters && stateService &&
            customerService && orderService && orderChartDataTransformationService && crmSystemEvents;

        if (validation) {
            globalViewModel.$on(crmSystemEvents.DASHBOARD_SWITCH_EVENT,
                function (eventInfo, eventData) {
                    var selectedCustomerId = eventData;

                    if (selectedCustomerId) {
                        stateService.go(DASHBOARD_HOME_STATE, {
                            customerId: selectedCustomerId
                        });
                    }
                });

            var selectedCustomerId = stateParameters.customerId;
            var customerPromise = customerService.getCustomerDetail(selectedCustomerId);
            var orderPromise = orderService.getOrdersByCustomerId(selectedCustomerId);

            promiseService.all([customerPromise, orderPromise])
                .then(
                    function (results) {
                        if (results) {
                            viewModel.customer = results[0];
                            viewModel.orders = results[1];
                            viewModel.ordersChartData =
                                orderChartDataTransformationService.transform(results[1]);
                        }
                    },
                    function (error) {
                        viewModelErrorUtils.handleError(viewModel, error);
                    });
        }
    }

    function StockViewerController(viewModel, browser, timer, stockQuotationService) {
        var validation = viewModel && browser && timer &&
            stockQuotationService;

        var timerObject = null;

        if (validation) {
            var initializeQuotation = function () {
                var quotation = stockQuotationService.getStockQuote(viewModel.customerInfo.id);

                viewModel.quotation = quotation;
                viewModel.stockQuoteHistory.unshift({
                    time: new Date(),
                    quotation: quotation
                });

                if (viewModel.gaugeData) {
                    viewModel.gaugeData.value =
                        Math.floor(quotation % DEFAULT_UPPER_LIMIT);
                }
            };

            viewModel.stockQuoteHistory = [];
            viewModel.gaugeData = {
                value: 0,
                valueUnit: DEFAULT_VALUE_UNIT,
                precision: DEFAULT_PRECISION,
                ranges: DEFAULT_COLOR_RANGES,
                lowerLimit: DEFAULT_LOWER_LIMIT,
                upperLimit: DEFAULT_UPPER_LIMIT
            };

            viewModel.$watch('refreshInterval',
                function (newValue) {
                    if (timerObject) {
                        browser.clearInterval(timerObject.$$intervalId);
                    }

                    timerObject = timer(initializeQuotation, viewModel.refreshInterval);
                });
        }
    }

    function DashboardSwitchPanelController(viewModel, crmSystemEvents) {
        var validation = viewModel && crmSystemEvents;

        if (validation) {
            viewModel.switchDashboard = function (customerId) {
                viewModel.$emit(crmSystemEvents.DASHBOARD_SWITCH_EVENT, customerId);
            };
        }
    }

    function NewCustomerHomeViewController() {
        var viewModel = this;
    }

    function NewCustomerFormController(viewModel, customerService) {
        var validation = viewModel && customerService;

        if (validation) {
            viewModel.customerRecord = {
                id: customerService.generateCustomerId(),
                status: true
            };

            viewModel.saveStatus = false;
            viewModel.phoneExpression = PHONE_PATTERN;
            viewModel.creditLimits = CREDIT_LIMITS;

            viewModel.saveRecord = function (customerForm) {
                var isFormValid = customerForm && customerForm.$valid;

                if (isFormValid) {
                    customerService.saveCustomerDetail(viewModel.customerRecord)
                        .then(
                            function (result) {
                                if (result) {
                                    viewModel.saveStatus = result.status;
                                }
                            },
                            function (error) {
                                viewModelErrorUtils.handleError(viewModel, error);
                            });
                }
            };
        }
    }

    var definitions = {
        CrmSystemHomeViewController: CrmSystemHomeViewController,
        CrmSystemDashboardHomeViewController: CrmSystemDashboardHomeViewController,
        StockViewerController: StockViewerController,
        DashboardSwitchPanelController: DashboardSwitchPanelController,
        NewCustomerHomeViewController: NewCustomerHomeViewController,
        NewCustomerFormController: NewCustomerFormController
    };

    module.exports = definitions;
})();