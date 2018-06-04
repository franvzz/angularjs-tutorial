var app = angular.module("CustomDirective", [])
.directive("myAutocomplete", function() {
  // funcion convención "link"
  function postLink(scope, element, attrs) {
    $(element).autocomplete({
      // eval = ejecutar como variable de javascript, no como string
      source: scope.$eval(attrs.myAutocomplete),
      select: function(ev, ui) {
        ev.preventDefault();
        if (ui.item) {
          scope.optionSelected(ui.item.value);
        }
      },
      focus: function(ev,ui) {
        ev.preventDefault();
        $(this).val(ui.item.label);
      }
    });
  };

  // return values
  return {
    link: postLink
  };
})
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
});
