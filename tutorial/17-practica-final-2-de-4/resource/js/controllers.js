angular.module("FinalApp")
.controller("MainController", function($scope, $resource) {
  // Post
  Post = $resource("http://jsonplaceholder.typicode.com/posts/:id", { id: "@id" });
  User = $resource("http://jsonplaceholder.typicode.com/users/:id", { id: "@id" });
  // query() -> GET / posts -> array of all posts -> isArray: true
  $scope.posts = Post.query();
  $scope.users = User.query();

});
