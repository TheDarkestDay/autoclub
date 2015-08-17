(function() {
    'use strict';
    
    angular.module('autoclubApp', ['autoclubControllers', 'autoclubRoutes', 'ngDialog']);
    
    angular.module('autoclubServices',[]);
    
    angular.module('autoclubRoutes',['ngRoute']);
    
    angular.module('autoclubControllers', ['autoclubServices']);
    
})();