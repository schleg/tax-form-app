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
      .otherwise({
        redirectTo: '/'
      })
  })
  .run(function ($httpBackend) {

    // root
    $httpBackend.whenGET(/\/{1}/).passThrough();
  });
