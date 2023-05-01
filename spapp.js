var app = angular.module('spapp', ['ngRoute']);

// Routing with ngRoute
app.config(function($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl : "first.html",
        controller  : "FirstController"
    })

    .when('/second', {
        templateUrl : "second.html",
        controller  : "SecondController"
    })

    .when('/third', {
        templateUrl : "third.html",
        controller  : "ThirdController"
    })

    .otherwise({
        redirectTo : "/"
    })
});

// Controllers
app.controller('FirstController', function($scope) {
	$scope.message = 'This is the Home Page';
	});
	 
	app.controller('SecondController', function($scope) {
	$scope.message = 'This is the About Page';
	});
	 
	app.controller('ThirdController', function($scope) {
	$scope.message = 'This is the Contact Page';
	});