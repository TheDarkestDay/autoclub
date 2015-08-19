(function() {
    'use strict';
    
    angular.module('autoclubControllers').controller('driverController', driverController);
    
    driverController.$inject = ['$routeParams','Drivers'];
    
    function driverController($routeParams, Drivers) {
        var vm = this;
        vm.destroy = destroy;
        
        var driver_id = $routeParams.driverId;
        
        function destroy() {
            Drivers.destroy(driver_id).then(resolve,reject);
            
            function resolve(data, status, header, config) {
                window.location = '/';
            }
        } 
        
        Drivers.get(driver_id).then(resolve, reject);
        
        function resolve(data, status, header, config) {
            console.log("OK");
            vm.data = data.data;
        }
        
        function reject(data, status, header, config) {
            console.log(data.error);
        }
    }
})();