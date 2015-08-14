var autoclubApp = angular.module('autoclubApp', ['ngRoute']);

autoclubApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'static/views/home.html',
    }).
    otherwise({
        redirectTo: '/home'
    });
}]);