angular.module("FinalApp")
.controller("MainController", function($scope, $resource) {
  // Post
  Post = $resource("http://jsonplaceholder.typicode.com/posts/:id", { id: "@id" });
  User = $resource("http://jsonplaceholder.typicode.com/users/:id", { id: "@id" });
  // query() -> GET / posts -> array of all posts -> isArray: true
  $scope.posts = Post.query();
  $scope.users = User.query();
  // removePost
  $scope.removePost = function(post) {
    Post.delete({ id: post.id }, function(response) {
      console.log(response);
      // option 1:
      // $scope.posts = Post.query();
    });
    // option 2:
    $scope.posts = $scope.posts.filter(function(element){
      // quitar elemento eliminado
      return element.id !== post.id;
    });
  }

})
.controller("PostController", function($scope, $resource, $routeParams){
  // Post
  Post = $resource("http://jsonplaceholder.typicode.com/posts/:id", { id: "@id" });
  $scope.post = Post.get({ id: $routeParams.id }); // get -> obj json
});
