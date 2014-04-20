'use strict';

angular.module('taxCompactorApp')
  .controller('AuthenticationCtrl', function ($scope) {
    $scope.validated = false;
    $scope.user = { name: '' };
    $scope.signup = function(userForm) {
      $scope.validated = true;
      if (userForm.$valid) {
      } 
    }
  });
