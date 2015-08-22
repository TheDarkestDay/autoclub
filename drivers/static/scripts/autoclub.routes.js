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
        }).when('/cars', {
            templateUrl: 'static/views/cars_list.html',
            controller: 'carListController',
            controllerAs: 'vm'
        }).when('/edit_car/:carId', {
            templateUrl: 'static/views/edit_car.html',
            controller: 'editCarController',
            controllerAs: 'vm'
        }).when('/cars/:carId', {
            templateUrl: 'static/views/car.html',
            controller: 'carController',
            controllerAs: 'vm'
        });
    }
})();