(function() {
    'use strict';
    
    angular.module('autoclubControllers').controller('editCarController', editCarController);
    
    editCarController.$inject = ['Cars', 'Drivers', '$routeParams'];
    
    function editCarController(Cars, Drivers, $routeParams) {
      var vm = this;
      var car_id = $routeParams.carId;
      vm.submit = submit;
      
      Cars.get(car_id).then(resolve,reject);
      
      function resolve(data, status, headers, config) {
          vm.model_name = data.data.model_name;
          vm.owner = data.data.owner;
          vm.car_id = data.data.id;
          Drivers.all().then(resolve,reject);
          
          function resolve(data, status, headers, config) {
              vm.drivers = data.data;
          }
      }
      
      function reject(data, status, headers, config) {
          console.log(data.error);
      }
      
      function submit() {
          var content = {
              id: vm.car_id,
              model_name: vm.model_name,
              owner: vm.owner
          };
          Cars.update(content).then(resolve,reject);
          
          function resolve(data, status, headers, config) {
              console.log('Updated');
              window.location = '/';
          }
      };
    };
})();