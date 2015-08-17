(function() {
    'use strict';
    
    angular.module('autoclubApp', ['autoclubControllers', 'autoclubRoutes', 'ngDialog']);

    angular.module('autoclubApp').run(initCSRFToken);
    
    angular.module('autoclubServices',[]);
    
    angular.module('autoclubRoutes',['ngRoute']);
    
    angular.module('autoclubControllers', ['autoclubServices']);
    
    initCSRFToken.$inject = ['$http'];
    
    function initCSRFToken($http) {
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    }
    
})();