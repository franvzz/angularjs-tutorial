var app = angular.module("MyFirstApp", [
  // "ngResource"
])
.controller("FirstController",
    function($scope, $http) {
      $scope.posts = {};
      $scope.newPost = {};
      $http.get("http://jsonplaceholder.typicode.com/posts")
      .then(function successCallback(response){
        console.log(response.data);
        $scope.posts = response.data;
      }, function errorCallback(response){
        console.log(response);
      });
      $scope.addPost = function() {
        $http.post(
          "http://jsonplaceholder.typicode.com/posts",
          {
            title: $scope.newPost.title,
            body: $scope.newPost.body,
            userId: 1
          }
        )
        .then(function successCallback(response){
          $scope.addPost = {};
          $scope.posts.push($scope.newPost);
          $scope.newPost = {};
        }, function errorCallback(response){
          console.log(response);
        });
      }
    }
);
