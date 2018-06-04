angular.module("CustomDirective")
.controller("ReposController", function($scope, $http) {

  // get repos
  $scope.repos = [];
  // api: https://api.github.com/users/franvzz/repos
  $http.get("https://api.github.com/users/franvzz/repos")
  .then(function successCallback(response){
    $scope.posts = response.data;
    for (var i = response.data.length - 1; i >= 0; i--) {
      var repo = response.data[i];
      $scope.repos.push(repo.name);
    }
  }, function errorCallback(err){
    console.log(err);
  });

  // optionSelected
  $scope.optionSelected = function(data) {
    $scope.$apply(function() {
      $scope.main_repo = data;
    });
  }
})
.controller("RepoController", function($scope, $http, $routeParams){
  $scope.repo = {};
  // $http.get("https://api.github.com/users/franvzz/repos/"+$routeParams.id) // En caso de utilizar ID en URL
  $http.get("https://api.github.com/repos/franvzz/"+$routeParams.name)
  .then(function successCallback(response){
    $scope.repo = response.data;
  }, function errorCallback(err){
    console.log(err);
  });
});
