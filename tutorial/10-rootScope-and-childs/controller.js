var app = angular.module("MyFirstApp", [])
.run(function($rootScope){
  $rootScope.name = "Abue Javi Vazz";
})
.controller("FirstController", function($scope){
  $scope.name = "Sr. J. Vazz";
})
.controller("ChildController", function($scope){
  $scope.name = "J. Vazz Jr";
});
