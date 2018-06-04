var app = angular.module("ToDoList", [
  // from: angular-local-storage...
  "LocalStorageModule"
])
.service('ToDoService', function(localStorageService){
  // key
  this.key = "angular-todolist";

  // inicializamos localStorageService
  if (localStorageService.get(this.key)) {
    this.activities = localStorageService.get(this.key);
  } else {
    this.activities = [];
  }

  // save
  this.updaLocalStorage = function() {
    localStorageService.set(this.key, this.activities);
  }

  // add
  this.add = function(newActv) {
    this.activities.push(newActv);
    this.updaLocalStorage();
  }

  // clean
  this.clean = function() {
    this.activities = [];
    this.updaLocalStorage();
  }

  // get all
  this.getAll = function() {
    return this.activities;
  }

  // removeActivity
  this.removeItem = function(item) {
    /*
      Iterar por array y quitar el valor
      [ {}, {}, {} ... ] -> toDoService.activities;
    */
    this.activities = this.activities.filter(function(activity) {
      return activity !== item;
    });
    this.updaLocalStorage();
    return this.getAll();
  }

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
