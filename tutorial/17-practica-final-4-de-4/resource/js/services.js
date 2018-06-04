angular.module("FinalApp")
.factory("PostResource", function($resource) {
  return $resource("http://jsonplaceholder.typicode.com/posts/:id", { id: "@id" }, { update: { method: "PUT" } }); // método personalizado de la api jsonplaceholder
});
// .factory("UserResource", function($resource) {
//   return $resource("http://jsonplaceholder.typicode.com/users/:id", { id: "@id" });
// });
