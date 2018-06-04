var app = angular.module("CustomDirective", [])
// backImg = back-img
.directive("imgCircle", function() {
  return function(scope, element, attrs) {
    //background:url({{ repo.owner.avatar_url }}); background-position:center; background-size:cover;
    attrs.$observe('imgCircle', function(value) {
      element.css({
        'background': 'url('+ value + ')',
        'background-position': 'center',
        'background-size': 'cover',
      });
    })
  }
})
.controller("AppCtrl", function($scope, $http) {
  // api: https://api.github.com/users/franvzz/repos
  $http.get("https://api.github.com/users/franvzz/repos")
  .then(function successCallback(response){
    $scope.repos = response.data;
  }, function errorCallback(err){
    console.log(err);
  });
});
