(function () {
    'use strict';

    var MIN_ID = 11;
    var MAX_ID = 21;
    var MIN_QUOTATION = 100;
    var MAX_QUOTATION = 1000;

    var DEFAULT_CHART_TYPE = 'line';

    var definitions = {
        customerService: function (restService, serviceUrls) {
            var serviceDefinition = {};
            var validation = restService && serviceUrls;

            if (validation) {
                var customerServiceUrl = serviceUrls.baseUrl +
                    serviceUrls.customers.baseUrl + serviceUrls.customers.queryAndSave;
                var customerRestService = restService(customerServiceUrl);

                serviceDefinition = {
                    getCustomers: function () {
                        return customerRestService.query().$promise;
                    },
                    getCustomerDetail: function (id) {
                        return customerRestService.get({
                            customerId: id
                        }).$promise;
                    },
                    saveCustomerDetail: function (customerDetail) {
                        return customerRestService.save(customerDetail).$promise;
                    },
                    generateCustomerId: function () {
                        var generatedId = Math.floor(
                            Math.random() * (MAX_ID - MIN_ID) + MIN_ID);

                        return generatedId;
                    }
                };
            }

            return serviceDefinition;
        },
        orderService: function (restService, serviceUrls) {
            var serviceDefinition = {};
            var validation = restService && serviceUrls;

            if (validation) {
                var orderServiceUrl = serviceUrls.baseUrl +
                    serviceUrls.orders.baseUrl + serviceUrls.orders.queryByCustomer;
                var orderRestService = restService(orderServiceUrl);

                serviceDefinition = {
                    getOrdersByCustomerId: function (customerId) {
                        return orderRestService.query({
                            customerId: customerId
                        }).$promise;
                    }
                };
            }

            return serviceDefinition;
        },
        orderChartDataTransformationService: function () {
            var serviceDefinition = {
                transform: function (data, chartType) {
                    chartType = chartType || DEFAULT_CHART_TYPE;

                    var chartData = [];

                    if (data) {
                        var orderIds = ['Order #'];
                        var orderAmounts = ['Order Amount'];

                        for (var index in data) {
                            var order = data[index];

                            if (order && order.orderId && order.amount) {
                                orderIds.push(order.orderId);
                                orderAmounts.push(order.amount);
                            }
                        }

                        chartData = [orderIds, orderAmounts];
                    }

                    return chartData;
                }
            };

            return serviceDefinition;
        },
        stockQuotationService: function () {
            var serviceDefinition = {
                getStockQuote: function (customerId) {
                    var quotation = 0;

                    if (customerId) {
                        quotation = Math.floor(
                            Math.random() * (MAX_QUOTATION - MIN_QUOTATION) + MIN_QUOTATION);
                    }

                    return quotation;
                }
            };

            return serviceDefinition;
        }
    };

    module.exports = definitions;
})();