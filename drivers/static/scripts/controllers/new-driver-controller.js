(function() {
    'use strict';
    
    angular.module('autoclubControllers').controller('newDriverController', newDriverController);
    
    newDriverController.$inject = ['Drivers'];
    
    function newDriverController(Drivers) {
        
        var vm = this;
        
        vm.submit = submit;
        
        function submit() {
            var content = {
                name: vm.name,
                age: parseInt(vm.age),
                profile: vm.bio
            };
            
            Drivers.create(content).then(resolve,reject);
            
            function resolve(data, status, headers, config) {
                console.log('OK');
            }
            
            function reject(data, status, headers, config) {
                console.log(data.error);
            }
        }
    }
})();