(function() {
    'use strict';
    
    angular.module('autoclubControllers').controller('newCarController', newCarController);
    
    newCarController.$inject = ['Drivers','Cars'];
    
    function newCarController(Drivers, Cars) {
        var vm = this;
        vm.submit = submit;
        
        
        Drivers.all().then(resolveDrivers, reject);
        
        function submit() {
            var content = {
                model_name: vm.model_name,
                owner: parseInt(vm.owner)
            }
            
            Cars.create(content).then(resolve,reject);
            
            function resolve(data, status, headers, config) {
                console.log('Car created');
                window.location = '/';
            }
            
        }
        
        function resolveDrivers(data, status, headers, config) {
            vm.data = data.data;
        }
        
        function reject(data, status, headers, config) {
            console.log(data.error);
        } 
    }
})();