(function() {
    'use strict';
    
    angular.module('autoclubControllers').controller('carListController', carListController);
    
    carListController.$inject = ['Cars'];
    
    function carListController(Cars) {
        var vm = this;
        
        Cars.all().then(resolve, reject);
        
        function resolve(data, status, headers, config) {
            vm.items = data.data;
        }
        
        function reject(data, status, headers, config) {
            console.log(data.error);
        }
    }
})();