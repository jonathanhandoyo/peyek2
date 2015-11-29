'use strict';

angular.module('peyekApp')
    .factory('Activity', function ($resource, DateUtils) {
        return $resource('api/activitys/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    });
