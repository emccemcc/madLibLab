var app = angular.module('myModule');

app.controller('Ctrl1', function($scope, ourFactory){

  $scope.fullName = function(firstName, lastName){
      var displayFullName = {
        first: firstName,
        second: lastName
      };
console.log(displayFullName);

      ourFactory.ourFunction(displayFullName);
console.log(ourFactory.returnWord());
$scope.finalResult = ourFactory.returnWord();

  };



});
