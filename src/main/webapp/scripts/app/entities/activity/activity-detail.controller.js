'use strict';

angular.module('peyekApp')
    .controller('ActivityDetailController', function ($scope, $rootScope, $stateParams, entity, Activity, User, Project) {
        $scope.activity = entity;
        $scope.load = function (id) {
            Activity.get({id: id}, function(result) {
                $scope.activity = result;
            });
        };
        var unsubscribe = $rootScope.$on('peyekApp:activityUpdate', function(event, result) {
            $scope.activity = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
