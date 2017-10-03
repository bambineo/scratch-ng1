
var myApp = angular.module('myApp',['ngMaterial']);

myApp.controller('mainController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
  $scope.color = 'Bluely';

  $scope.sendForm = function() {
      console.log('Test');
  }

}]);
