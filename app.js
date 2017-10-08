
var myApp = angular.module('myApp',['ngMaterial']);

myApp.controller('mainController', ['$scope', function($scope) {

  $scope.todo = {};

  $scope.sendForm = function($event) {
      console.log($event);
      newTodo = angular.copy($scope.todo);
      $scope.todos.push(newTodo);
      $scope.todo = {};
  }

  $scope.todos = [
    {title: 'erstes', description: 'echt erstes', done:true}, 
    {title: 'zweites', description: 'echt zweites', done:false},
    {title: 'drittes', description: 'echt drittes', done:true}
  ];

  $scope.deleteItem = function(index) {
    console.log(index);
    $scope.todos.splice(index, 1);
  }



}]);
