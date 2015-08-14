var driverCtrls = angular.module('driverCtrls', []);

driverCtrls.controller('driverListController', function($scope, $http) {
    $http.get('/drivers/').success(function(data) {
       $scope.items = data; 
    });
});
