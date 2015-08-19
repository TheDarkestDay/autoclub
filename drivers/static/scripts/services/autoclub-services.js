(function() {
    'use strict';
    angular.module('autoclubServices').factory('Drivers', Drivers);
    
    Drivers.$inject = ['$http'];
    
    function Drivers($http) {
        
        var Drivers = {
            all: all,
            create: create,
            get: get,
            delete: delete,
            update: update
        };
        
        return Drivers;
        
        function all() {
            return $http.get('http://autoclub-thedarkestday.c9.io/api/drivers/');
        }
        
        function get(id) {
            return $http.get('http://autoclub-thedarkestday.c9.io/api/drivers/'+id+'/');
        }
        
        function create(content) {
            return $http.post('http://autoclub-thedarkestday.c9.io/api/drivers/', {
                name: content.name,
                age: content.age,
                profile: content.profile
            });
        }
    }
})();