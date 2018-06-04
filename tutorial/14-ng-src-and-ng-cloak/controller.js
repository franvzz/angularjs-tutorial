var app = angular.module("CustomDirective", [])
.controller("AppCtrl", function($scope, $http) {
  // api: https://api.github.com/users/codigofacilito/repos
  // api: https://api.github.com/users/franvzz/repos
  $http.get("https://api.github.com/users/franvzz/repos")
  .then(function successCallback(response){
    $scope.repos = response.data;
  }, function errorCallback(err){
    console.log(err);
  });
});
