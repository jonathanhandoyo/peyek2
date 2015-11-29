'use strict';

angular.module('peyekApp')
	.controller('ActivityDeleteController', function($scope, $modalInstance, entity, Activity) {

        $scope.activity = entity;
        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
        $scope.confirmDelete = function (id) {
            Activity.delete({id: id},
                function () {
                    $modalInstance.close(true);
                });
        };

    });