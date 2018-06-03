var app = angular.module("MyFirstApp", [
  // "ngResource"
])
.controller("FirstController",
  [
    // dependencies
    "$scope",
    "$http",
    // function with dependencies
    function(m, $http){
      // variables
      m.name = "Javier Vazz";
      // array
      m.newComment = { };
      // values
      m.comments = [
        {
          comment: "Buen tutorial",
          username: "codigo facilito",
        },
        {
          comment: "Great!",
          username: "other user",
        },
      ];
      // subfunction
      m.addComment = function() {
        // add values to array
        m.comments.push(m.newComment);
        // init array (& inputs values)
        m.newComment = {};
      }
    }
  ]
);
