angular.module("FinalApp")
.controller("MainController", function($scope, $resource, PostResource) {
  // Post
  // Post = $resource("http://jsonplaceholder.typicode.com/posts/:id", { id: "@id" }, { update: { method: "PUT" } }); // método personalizado de la api jsonplaceholder
  User = $resource("http://jsonplaceholder.typicode.com/users/:id", { id: "@id" });
  // query() -> GET / posts -> array of all posts -> isArray: true
  // $scope.posts = Post.query(); // Se genero codigo en services.jss
  $scope.posts = PostResource.query();
  $scope.users = User.query();
  // removePost
  $scope.removePost = function(post) {
    // Post.delete({ id: post.id }, function(response) {
    PostResource.delete({ id: post.id }, function(response) {
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
// .controller("PostController", function($scope, $resource, $routeParams){
.controller("PostController", function($scope, PostResource, $routeParams){
  // title on edit
  $scope.form_title = "Edit Post";
  // Post
  // Post = $resource("http://jsonplaceholder.typicode.com/posts/:id", { id: "@id" });
  // $scope.post = Post.get({ id: $routeParams.id }); // get -> obj json
  $scope.post = PostResource.get({ id: $routeParams.id }); // get -> obj json

  // update
  $scope.savePost = function() {
    // Post.save({
    PostResource.update({ id: $scope.post.id }, {
      data: $scope.post
    }, function(data){
      console.log(data);
    });
  }
})
// .controller("NewPostController", function($scope, $resource) {
.controller("NewPostController", function($scope, PostResource) {
  // Post = $resource("http://jsonplaceholder.typicode.com/posts/:id", { id: "@id" });
  $scope.post = {};
  $scope.form_title = "New Post";
  $scope.savePost = function() {
    // Post.save({
    PostResource.save({
      data: $scope.post
    }, function(data){
      console.log(data);
    });
  }
});
