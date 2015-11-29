'use strict';

angular.module('peyekApp')
	.controller('DocumentDeleteController', function($scope, $modalInstance, entity, Document) {

        $scope.document = entity;
        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
        $scope.confirmDelete = function (id) {
            Document.delete({id: id},
                function () {
                    $modalInstance.close(true);
                });
        };

    });