var app = angular.module("MyFirstApp", [
  // "ngResource"
])
.controller("FirstController",
    function($scope, $http) {
      $scope.posts = {};
      $http.get("http://jsonplaceholder.typicode.com/posts")
        .then(function successCallback(response){
          console.log(response.data);
          $scope.posts = response.data;
        }, function errorCallback(response){
          console.log(response);
        });
    }
);
