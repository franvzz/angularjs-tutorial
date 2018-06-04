var app = angular.module("mainModule", [])
  .filter("removeHtml", function(){
    return function(texto) {
      return String(texto).replace(/<[^>]+>/gm, '');
    }
  })
  .controller("FiltersController", function($scope){
    $scope.nombre = "Javier";
    $scope.mi_html = {};
    $scope.mi_html.title = '<h3>Hola</h3>';
    $scope.mi_html.body = '<h3>Mundo!</h3>';
    $scope.costo = 2;
  });
