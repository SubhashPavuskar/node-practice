(function () {
    'use strict';

    var c3 = require('c3');

    function ChartRendererController(viewModel) {
        if (viewModel) {
            viewModel.$watch('chartData',
                function (newValue) {
                    if (newValue && c3) {
                        c3.generate({
                            bindto: viewModel.targetDomElement,
                            data: {
                                type: viewModel.chartType,
                                columns: viewModel.chartData
                            }
                        });
                    }
                });
        }
    }

    var definitions = {
        ChartRendererController: ChartRendererController
    };

    module.exports = definitions;
})();