var app = angular.module('myModule', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/input', {
        controller: 'Ctrl1',
        templateUrl: 'input.html'
    })
    .when('/result', {
      controller: 'Ctrl1',
      templateUrl: 'result.html'
    })

    .otherwise({ redirectTo: '/'});
$locationProvider.hashPrefix('');

});
