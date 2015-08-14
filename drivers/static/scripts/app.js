var autoclubApp = angular.module('autoclubApp', ['ngRoute', 'driverCtrls']);

autoclubApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'static/views/home.html',
        controller: 'driverListController'
    });
}]);