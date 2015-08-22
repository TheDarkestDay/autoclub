(function() {
    'use strict';
    
    angular.module('autoclubServices').factory('Cars', Cars);
    
    Cars.$inject = ['$http'];
    
    function Cars($http) {
      var Cars = {
          get: get,
          create: create,
          update: update,
          destroy: destroy,
          all: all
      };
      
      return Cars;
      
      function all() {
          return $http.get('http://autoclub-thedarkestday.c9.io/api/cars/');
      }
      
      function get(id) {
          return $http.get('http://autoclub-thedarkestday.c9.io/api/cars/'+id+'/');
      }
      
      function create(content) {
          return $http.post('http://autoclub-thedarkestday.c9.io/api/cars/', {
              model_name: content.model_name,
              owner: content.owner
          });
      }
      
      function update(content) {
          return $http.put('http://autoclub-thedarkestday.c9.io/api/cars/'+content.id+'/', content);
      }
      
      function destroy(id) {
          return $http.delete('http://autoclub-thedarkestday.c9.io/api/cars/'+id+'/');
      }
      
    };
    
})();