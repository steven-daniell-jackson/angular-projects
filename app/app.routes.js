var app = angular.module('appRoutes',['ngRoute']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
        .when('/', {
            redirectTo: '/home',
            templateUrl: 'app/views/home.html',
        })
        .when('/home', {
            templateUrl: 'app/views/home.html',
            controller: 'MainController'
        })
        .when('/overview', {
            templateUrl: 'app/views/overview.html',
            controller: ''
        })
        .when('/about-me', {
            templateUrl: 'app/views/about.html',
            controller: ''
        })
        .when('/contact', {
            templateUrl: 'app/views/contact.html',
            controller: ''
        })
        .when('/calculator', {
            templateUrl: 'app/views/calculator.html',
            controller: 'CalcControl'
        })
        .when('/weather', {
            templateUrl: 'app/views/weather.html',
            controller: 'WeatherController'
        })
         .when('/rps', {
            templateUrl: 'app/views/rock-paper-scissors.html',
            controller: 'RPS'
        })
        .otherwise({
            redirectTo: '/404',
            templateUrl: 'app/views/404.html',
            controller: ''
        });
    }]);