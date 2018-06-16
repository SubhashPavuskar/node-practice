(function () {
    'use strict';

    var CACHE_CONTAINER = 'subHeadingCacheContainer';
    var CACHE_KEY = 'subHeadingCache';

    function SubHeadingServiceDecorator(delegateService, cacheFactory, promiseService) {
        var validation = delegateService && cacheFactory && promiseService;

        if (validation) {
            var realServiceReference = delegateService.getSubHeadings;
            var subHeadingCacheContainer = cacheFactory(CACHE_CONTAINER);

            delegateService.getSubHeadings = function () {
                var cache = subHeadingCacheContainer.get(CACHE_KEY);
                var deferred = promiseService.defer();

                if (cache) {
                    deferred.resolve(cache);
                } else {
                    realServiceReference()
                        .then(
                            function (data) {
                                if(data) {
                                    subHeadingCacheContainer.put(CACHE_KEY, data);
                                }

                                deferred.resolve(data);
                            },
                            function (error) {
                                deferred.reject(error);
                            });
                }

                return deferred.promise;
            };
        }

        return delegateService;
    }

    var definitions = {
        configureServiceDecorators: function (provideService) {
            if (provideService) {
                var subHeadingServiceDecoratorDefinition =
                    [
                        '$delegate',
                        '$cacheFactory',
                        '$q',
                        SubHeadingServiceDecorator
                    ];

                provideService.decorator('subHeadingService', subHeadingServiceDecoratorDefinition);
            }
        }
    };

    module.exports = definitions;
})();