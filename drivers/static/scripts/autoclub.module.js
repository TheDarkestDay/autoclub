(function() {
    'use strict';
    
    angular.module('autoclubApp', ['ngRoute', 'autoclubCtrls']);
    
    angular.module('autoclubServices',[]);
    
    angular.module('autoclubCtrls', ['autoclubServices']);
    
})();