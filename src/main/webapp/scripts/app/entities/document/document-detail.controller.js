'use strict';

angular.module('peyekApp')
    .controller('DocumentDetailController', function ($scope, $rootScope, $stateParams, entity, Document, Project, Contractor) {
        $scope.document = entity;
        $scope.load = function (id) {
            Document.get({id: id}, function(result) {
                $scope.document = result;
            });
        };
        var unsubscribe = $rootScope.$on('peyekApp:documentUpdate', function(event, result) {
            $scope.document = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
