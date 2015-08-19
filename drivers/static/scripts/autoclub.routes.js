(function() {
    'use strict';
    
    angular.module('autoclubRoutes').config(config);
    
    config.$inject = ['$routeProvider'];
    
    function config($routeProvider) {
        $routeProvider.when('/',{
           templateUrl: 'static/views/home.html',
           controller: 'driverListController',
           controllerAs: 'vm'
        }).when('/drivers/:driverId', {
            templateUrl: 'static/views/driver.html',
            controller: 'driverController',
            controllerAs: 'vm'
        }).when('/edit_driver/:driverId', {
            templateUrl: 'static/views/edit_driver.html',
            controller: 'editDriverController',
            controllerAs: 'vm'
        });
    }
})();