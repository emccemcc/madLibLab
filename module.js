var app = angular.module('myModule', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/input', {
        controller: 'Ctrl1',
        templateUrl: 'input.html'
    })
    .when('/result', {
      controller: 'Ctrl2',
      templateUrl: 'result.html'
    });


});
