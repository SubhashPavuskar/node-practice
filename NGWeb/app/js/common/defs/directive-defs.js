(function () {
    'use strict';

    var directiveUtils = require('../../utilities/directive-utils');

    var definitions = {
        headerDirective: function (templateUrls) {
            var scope = {
                headerTitle: '@'
            };

            return directiveUtils.createDirective(templateUrls.header, scope);
        },
        footerDirective: function (templateUrls) {
            return directiveUtils.createDirective(templateUrls.footer);
        },
        navigationPanelDirective: function (templateUrls) {
            var scope = null;
            var controller = 'navigationPanelController';

            return directiveUtils.createDirective(templateUrls.navigationPanel, scope, controller);
        },
        subHeadingViewerDirective: function (templateUrls) {
            var scope = {
                headingTitle: '=',
                headingDescription: '='
            };

            return directiveUtils.createDirective(templateUrls.subHeadingViewer, scope);
        }
    };

    module.exports = definitions;
})();