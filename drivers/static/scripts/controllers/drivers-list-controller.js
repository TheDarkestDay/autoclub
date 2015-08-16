(function() {
    'use strict';
    
    angular.module('autoclubControllers').controller('driverListController', driverListController);
    
    driverListController.$inject = ['$scope', 'Drivers'];
    
    function driverListController($scope, Drivers) {
        
        var self = this;
        
        self.items = [];
        
        run();
        
        function run() {
            Drivers.all().then(resolve,reject);
            
            function resolve(data, status, header, config) {
                self.items = data.data;
            }
            
            function reject(data, status, header, config) {
            }
        }
    }
})();