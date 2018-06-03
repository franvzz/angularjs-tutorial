var app = angular.module("MyFirstApp", [
  // "ngResource"
])
.controller("FirstController", function($scope){
  $scope.name = "Javier";
  $scope.newComment = {
    // comment: "Hello World!"
  };
  $scope.comments = [
    {
      comment: "Buen tutorial",
      username: "codigo facilito",
    },
    {
      comment: "Great!",
      username: "other user",
    },
  ];
  $scope.addComment = function() {
    $scope.comments.push($scope.newComment);
    $scope.newComment = {};
  }
});
