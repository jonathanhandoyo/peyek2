'use strict';

angular.module('peyekApp')
	.controller('ContractorDeleteController', function($scope, $modalInstance, entity, Contractor) {

        $scope.contractor = entity;
        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
        $scope.confirmDelete = function (id) {
            Contractor.delete({id: id},
                function () {
                    $modalInstance.close(true);
                });
        };

    });