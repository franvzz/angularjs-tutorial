var app = angular.module("mainModule", [])
  .controller("FiltersController", function($scope){
    $scope.name = "Javier";
    // setTimeout(function(){
    //   $scope.$apply(function() {
    //     $scope.name = "Sr. J. Vazz";
    //   });
    // }, 2000);
    document.querySelector("#button").addEventListener("click", function() {
      $scope.$apply(function() {
        $scope.name = "Sr. J. Vazz - Apply addEventListener";        
      })
    });
  });
