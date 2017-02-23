var app = angular.module('myModule');

app.controller('Ctrl1', function($scope, $location, ourFactory){

  $scope.fullName = function(firstName, middleName, lastName){
      var displayFullName = {
        first: firstName,
        second: middleName,
        third: lastName
          
      };
console.log(displayFullName);


      ourFactory.ourFunction(displayFullName);
console.log(ourFactory.returnWord());
$location.path('/result');

  };

/*
  displayResult();
  function displayResult() {
    $scope.finalResult = ourFactory.returnWord();
    console.log($scope.finalResult);

  }
*/
});
