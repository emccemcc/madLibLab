var app = angular.module('myModule');

app.controller('Ctrl2', function($scope, ourFactory){

  $scope.finalResult = ourFactory.returnWord();

});
