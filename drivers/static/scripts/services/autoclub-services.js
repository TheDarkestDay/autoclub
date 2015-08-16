(function() {
    'use strict';
    angular.module('autoclubServices').factory('Drivers', Drivers);
    
    Drivers.$inject = ['$http'];
    
    function Drivers($http) {
        
        var Drivers = {
            all: all,
            create: create
        };
        
        return Drivers;
        
        function all() {
            return $http.get('http://autoclub-thedarkestday.c9.io/api/drivers/');
        }
        
        function create(content) {
            return $http.post('http://autoclub-thedarkestday.c9.io/api/drivers/', {
                content: content
            });
        }
    }
})();