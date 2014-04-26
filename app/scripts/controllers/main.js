'use strict';

angular.module('taxCompactorApp')
  .controller('MainCtrl', function ($scope, Preparation, Forms) {
    $scope.preparation = Preparation.get({id: 1});
    $scope.forms = Forms.get({preparation_id: 1});
    $scope.update = function () {
      Preparation.update({id: 1}, { preparation: $scope.preparation }).$promise.then(function () {
        $scope.forms = Forms.get({preparation_id: 1});
      });
    };
  });
