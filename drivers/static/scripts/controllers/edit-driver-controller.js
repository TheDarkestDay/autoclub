(function() {
    'use strict';
    
    angular.module('autoclubControllers').controller('editDriverController', editDriverController);
    
    editDriverController.$inject = ['$routeParams', 'Drivers'];
    
    function editDriverController($routeParams, Drivers) {
        var vm = this;
        var driver_id = $routeParams.driverId;
        
        vm.submit = submit;
        
        Drivers.get(driver_id).then(resolve, reject);
        
        function resolve(data, status, headers, config) {
            vm.name = data.data.name;
            vm.age = data.data.age;
            vm.bio = data.data.profile;
        }
        
        function reject(data, status, header, config) {
            console.log(data.error);
        }
        
        function submit() {
            var content = {
                id: driver_id,
                name: vm.name,
                age: vm.age,
                profile: vm.bio
            }
            
            Drivers.update(content).then(resolve, reject);
            
            function resolve(data, status, header, config) {
                console.log('Updated');
                window.location = '/';
            }
            
            function reject(data, status, header, config) {
                console.log(data.error);
            }
        }
    }
})();