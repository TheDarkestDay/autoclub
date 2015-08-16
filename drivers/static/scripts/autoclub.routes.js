(function() {
    'use strict';
    
    angular.module('autoclubRoutes').config(config);
    
    config.$inject = ['$routeProvider'];
    
    function config($routeProvider) {
        $routeProvider.when('/home',{
           templateUrl: 'static/views/home.html',
           controller: 'driverListController',
           controllerAs: 'vm'
        });
    }
})();