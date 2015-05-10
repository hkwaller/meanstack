angular.module('app', ['app.controllers', 'app.services', 'ngRoute'])

.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        controller: 'MainCtrl',
        templateUrl: 'partials/posts.html'
    })
    .when('/register', {
        controller: 'RegisterCtrl',
        templateUrl: 'partials/register.html'
    })
    
    .when('/login', {
        controller: 'LoginCtrl',
        templateUrl: 'partials/login.html'
    })
    
    .otherwise('/')
})