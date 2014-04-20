'use strict';
angular.module('taxCompactorApp')
  .directive('valueMatch', [function () {
    return {
      restrict: 'A',
      scope: true,
      require: 'ngModel',
      link: function (scope, elem, attrs, ctrl) {
        var validator = function () {
          var expected = scope.$eval(attrs.ngModel);
          var actual = scope.$eval(attrs.valueMatch);
          return expected == actual;
        };
        scope.$watch(validator, function (n) {
          ctrl.$setValidity("unmatched", n);
        });
      }
    };
  }]);
