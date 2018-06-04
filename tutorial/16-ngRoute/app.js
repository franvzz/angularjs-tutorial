angular.module("CustomDirective", [
  'ngRoute'
])
.config(function($routeProvider) {
  $routeProvider
    // home
    .when("/", {
      controller: "ReposController",
      templateUrl: "templates/home.html"
    })
    // details
    .when("/repo/:name", { // "repo/:id" en caso de utilizar ID
      controller: "RepoController",
      templateUrl: "templates/details.html"
    })
    .otherwise("/");
});
