'use strict';

angular.module('taxCompactorApp')
  .factory('Forms', function ($resource, TAX_COMPACTOR_API_ROOT) {
    return $resource(TAX_COMPACTOR_API_ROOT + '/preparations/:preparation_id/forms', {}, {
      get: {
        method: 'GET',
        isArray: true
      }
    });
  });
