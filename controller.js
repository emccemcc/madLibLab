var app = angular.module('myModule');

app.controller('Ctrl1', function($scope, ourFactory){

  $scope.fullName = function(firstName, lastName){
      var displayFullName = {
        fist: firstName,
        second: lastName
      };


      ourFacotry.x(dispalyFullName);

  };



});
