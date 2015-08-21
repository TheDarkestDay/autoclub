(function() {
    'use strict';
    
    angular.module('autoclubControllers').controller('newDriverController', newDriverController);
    
    newDriverController.$inject = ['Drivers', '$scope', '$location'];
    
    function newDriverController(Drivers, $scope, $location) {
        
        var vm = this;
        
        vm.submit = submit;
        
        function submit() {
            var content = {
                name: vm.name,
                age: parseInt(vm.age),
                profile: vm.bio
            };
            
            Drivers.create(content).then(resolve,reject);
            
            $scope.closeThisDialog();
            
            function resolve(data, status, headers, config) {
                console.log('OK');
                window.location = '/';
            }
            
            function reject(data, status, headers, config) {
                console.log(data.error);
            }
        }
    }
})();