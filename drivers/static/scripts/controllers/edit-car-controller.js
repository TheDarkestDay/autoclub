(function() {
    'use strict';
    
    angular
      .module('autoclubControllers')
      .controller('editCarController', ['$scope', 'Cars', 'Drivers', '$routeParams', function($scope, Cars, Drivers, $routeParams){
        var car_id = $routeParams.carId;
        
        $scope.submit = function() {
          var content = {
            id: car_id,
            model_name: $scope.model_name,
            owner: $scope.owner
          };
          Cars
            .update(content)
            .then(
              function() {
                console.log('Updated');
                window.location = '/';
              },
              function(){
                console.log("unable to submit", arguments)
              });
        };
      
        Cars
          .get(car_id)
          .then(function(data, status, headers, config) {
            $scope.model_name = data.data.model_name;
            $scope.owner = data.data.owner;
            $scope.car_id = data.data.id;
          
            Drivers
              .all()
              .then(function(data) {
                $scope.drivers = data.data;
              },function() {
                console.log("unable to submit", arguments)
              });
      }, function() {
        console.log('unable to retrieve data');
      });
    }]);
})();