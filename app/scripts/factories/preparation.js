'use strict';

angular.module('taxCompactorApp')
  .factory('Preparation', function ($resource, TAX_COMPACTOR_API_ROOT) {
    return $resource(TAX_COMPACTOR_API_ROOT + '/preparations/:id', {}, {
      get: {
        method: 'GET'
      },
      update: {
        url: TAX_COMPACTOR_API_ROOT + '/preparations/:id',
        method: 'PUT'
      }
    });
  });
