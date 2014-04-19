'use strict';

angular
  .module('taxCompactorApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngMockE2E'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/authentication/signup.html',
        controller: 'AuthenticationCtrl'
      })
      .when('/signin', {
        templateUrl: 'views/authentication/signin.html',
        controller: 'AuthenticationCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
  })
  .run(function ($httpBackend) {

    // root
    $httpBackend.whenGET(/\/{1}/).passThrough();
  });
