(function() {
    'use strict';
    
    angular.module('autoclubControllers').controller('carController', carController);
    
    carController.$inject = ['Cars','Drivers','$routeParams'];
    
    function carController(Cars, Drivers, $routeParams) {
        var vm = this;
        var car_id = $routeParams.carId;
        vm.destroy = destroy;
        
        Cars.get(car_id).then(resolve,reject);
        
        function resolve(data, status, headers, config) {
            vm.data = data.data;
            var driver_id = vm.data.owner;
            Drivers.get(driver_id).then(resolveDriver,reject);
            
            function resolveDriver(data, status, headers, config) {
                vm.driver_name = data.data.name;
            }
        }
        
        function reject(data, status, headers, config) {
            console.log(data.error);
        }
        
        function destroy() {
            Cars.destroy(car_id).then(resolve,reject);
            
            function resolve(data, status, headers, config) {
                console.log('Destroyed');
                window.location = '/';
            }
            
            function reject(data, status, headers, config) {
                console.log(data.error);
            }
        }
    }
})();