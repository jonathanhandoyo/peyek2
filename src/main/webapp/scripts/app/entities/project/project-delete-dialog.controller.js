'use strict';

angular.module('peyekApp')
	.controller('ProjectDeleteController', function($scope, $modalInstance, entity, Project) {

        $scope.project = entity;
        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
        $scope.confirmDelete = function (id) {
            Project.delete({id: id},
                function () {
                    $modalInstance.close(true);
                });
        };

    });