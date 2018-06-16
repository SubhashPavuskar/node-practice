describe('CRM System Home View Controller Test Suite',
    function () {
        var moduleName = 'com.tt.modules.crmsystem.controllers';

        beforeEach(module(moduleName));

        var rootScope = {};
        var mockPushNotificationService = {
            registerCallback: function () {
            }
        };
        var mockCustomers =
            [
                {id: 11, name: 'Customer #11', address: 'Address 1', credit: 200, status: true, remarks: 'Simple'},
                {id: 12, name: 'Customer #12', address: 'Address 1', credit: 200, status: true, remarks: 'Simple'},
                {id: 13, name: 'Customer #13', address: 'Address 1', credit: 200, status: true, remarks: 'Simple'},
                {id: 14, name: 'Customer #14', address: 'Address 1', credit: 200, status: true, remarks: 'Simple'},
                {id: 15, name: 'Customer #15', address: 'Address 1', credit: 200, status: true, remarks: 'Simple'}
            ];

        var mockCustomerService =
        {
            getCustomers: function () {
                return {
                    then: function (sc, fc) {
                        sc(mockCustomers);
                    }
                };
            }
        };

        it('Valid Controller Test Case 1', inject(function ($controller) {
            spyOn(mockCustomerService, 'getCustomers').and.callThrough();

            var controller = $controller('CrmSystemHomeViewController', {
                $rootScope: rootScope,
                customerService: mockCustomerService,
                PushNotificationService: mockPushNotificationService
            });

            expect(controller.customers).toBeDefined();
            expect(controller.customers.length).toBe(5);
            expect(controller.customers).toEqual(mockCustomers);
            expect(controller.customers[0].id).toBe(11);
            expect(controller.customers[1].name).toBe('Customer #12');
            expect(mockCustomerService.getCustomers).toHaveBeenCalledTimes(1);
        }));

        afterEach(function () {
            console.log('Test Cleanup Completed!');
        });
    });