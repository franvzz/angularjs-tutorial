var app = angular.module("ToDoList", [
  // from: angular-local-storage...
  "LocalStorageModule"
])
.controller("ToDoController", function($scope, localStorageService){
  $scope.nombre = "Javier";
  if(localStorageService.get("angular-todolist")) {
    $scope.toDo = localStorageService.get("angular-todolist");
  }
  else {
    $scope.toDo = [];
  }
  /*
    $scope.toDo =
    {
        activity: "Terminar curso AngularJS",
        create: "03-06-2018 2:42am"
    }
  */
  // watch : sirve para que localStorageService "observe" cada acción
  // watchCollection : igual que watch pero para arrays
  $scope.$watchCollection('toDo', function(){
    localStorageService.set("angular-todolist", $scope.toDo);
  });
  $scope.addActivity = function() {
    $scope.toDo.push($scope.newActivity);
    $scope.newActivity = {};
    // localStorageService.set("angular-todolist", $scope.toDo);
  }
  // $scope.cleanActivities = function() {
    // $scope.toDo = [];
    // localStorageService.empty("angular-todolist", $scope.toDo);
  // }
});
