var app = angular.module("ToDoList", [
  // from: angular-local-storage...
  "LocalStorageModule"
])
.factory('ToDoService', function(localStorageService){
  // variable factory
  var toDoService = {};

  // key
  toDoService.key = "angular-todolist";

  // inicializamos localStorageService
  if (localStorageService.get(toDoService.key)) {
    toDoService.activities = localStorageService.get(toDoService.key);
  } else {
    toDoService.activities = [];
  }

  // save
  toDoService.updaLocalStorage = function() {
    localStorageService.set(toDoService.key, toDoService.activities);
  }

  // add
  toDoService.add = function(newActv) {
    toDoService.activities.push(newActv);
    toDoService.updaLocalStorage();
  }

  // clean
  toDoService.clean = function() {
    toDoService.activities = [];
    toDoService.updaLocalStorage();
  }

  // get all
  toDoService.getAll = function() {
    return toDoService.activities;
  }

  // removeActivity
  toDoService.removeItem = function(item) {
    /*
      Iterar por array y quitar el valor
      [ {}, {}, {} ... ] -> toDoService.activities;
    */
    toDoService.activities = toDoService.activities.filter(function(activity) {
      return activity !== item;
    });
    toDoService.updaLocalStorage();
    return toDoService.getAll();
  }

  // return factory
  return toDoService;
})
.controller("ToDoController", function($scope, ToDoService){

  // get all activities
  $scope.todo = ToDoService.getAll();

  // new activity
  $scope.newActv = {};
  $scope.addActv = function() {
    ToDoService.add($scope.newActv);
    $scope.newActv = {};
  }

  // remove activity
  $scope.removeActv = function(item) {
    $scope.todo = ToDoService.removeItem(item);
  }

  // clean activities
  $scope.clean = function() {
    $scope.todo = ToDoService.clean();
  }
  
});
