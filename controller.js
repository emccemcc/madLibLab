var app = angular.module('myModule');

app.controller('Ctrl1', function($scope, $location, ourFactory){

  $scope.fullSong = function(place, activity, activityPlural, pronoun, nickname, rhyme1, people, verb2, need, money, disease, bring, knees, bleed){
      var createSong = {
        first: place,
        second: activity,
        third: activityPlural,
        fourth: pronoun,
        fifth: nickname,
        sixth: rhyme1,
        seventh: people,
        eighth: verb2,
        ninth: need,
        tenth: money,
        eleventh: disease,
        twelth: bring,
        thirteenth: knees,
        fourteenth: bleed
          
      };
console.log(createSong);


      ourFactory.ourFunction(createSong);
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
