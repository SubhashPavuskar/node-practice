(function () {
    'use strict';

    var URL_DELIMITER = '/';
    var PROTOCOL_DELIMITER = '//';
    var PORT_DELIMITER = ':';

    var socketIOClient = require('socket.io-client');

    function PushNotificationService(notificationUrlProvider) {
        if (notificationUrlProvider) {
            var notificationUrl = notificationUrlProvider.getNotificationUrl();
            var notificationCallbacks = {};

            this.registerCallback = function (eventName, callback) {
                var registeredEventCallbacks = notificationCallbacks[eventName];

                if (!registeredEventCallbacks) {
                    notificationCallbacks[eventName] = [];
                    registeredEventCallbacks = notificationCallbacks[eventName];

                    var socketClient = socketIOClient.connect(notificationUrl);

                    socketClient.on(eventName,
                        function (notificationData) {
                            if (notificationData) {
                                for (var index in registeredEventCallbacks) {
                                    var eventCallback = registeredEventCallbacks[index];

                                    eventCallback(notificationData);
                                }
                            }
                        });
                }

                registeredEventCallbacks.push(callback);
            };
        }
    }

    var definitions = {
        notificationUrlProviderService: function (browser) {
            var serviceDefinition = {};

            if (browser) {
                var locationObject = browser.location;

                serviceDefinition = {
                    getNotificationUrl: function () {
                        var notificationUrl = locationObject.protocol +
                            PROTOCOL_DELIMITER + locationObject.hostname +
                            PORT_DELIMITER + locationObject.port + URL_DELIMITER;

                        return notificationUrl;
                    }
                };
            }

            return serviceDefinition;
        },
        PushNotificationService: PushNotificationService
    };

    module.exports = definitions;
})();