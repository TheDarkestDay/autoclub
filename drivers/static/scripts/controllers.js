var driverCtrls = angular.module('driverCtrls', []);

driverCtrls.controller('driverListController', function($scope, $http) {
    $http.get('http://autoclub-thedarkestday.c9.io/api/drivers/').success(function(data) {
       $scope.items = data; 
    });
});
