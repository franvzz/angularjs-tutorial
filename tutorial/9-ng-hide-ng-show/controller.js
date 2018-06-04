var app = angular.module("MyFirstApp", [
  // "ngResource"
])
.controller("FirstController",
    function($scope, $http) {
      $scope.posts = [];
      $scope.loading = true;
      $http.get("http://jsonplaceholder.typicode.com/posts")
        .then(function successCallback(response){
          console.log(response.data);
          $scope.posts = response.data;
          $scope.loading = false;
          if($scope.posts <= 0) {
            $scope.notify = 'No se encontraron datos';
          }
          else {
            $scope.notify = 'Success!!';
          }
        }, function errorCallback(err){
          // console.log(err);
          $scope.loading = false;
          $scope.notify = 'Error al cargar datos!';
        });
    }
);
