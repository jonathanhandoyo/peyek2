'use strict';

angular.module('peyekApp').controller('ContractorDialogController',
    ['$scope', '$stateParams', '$modalInstance', 'entity', 'Contractor', 'Document', 'Project',
        function($scope, $stateParams, $modalInstance, entity, Contractor, Document, Project) {

        $scope.contractor = entity;
        $scope.documents = Document.query();
        $scope.projects = Project.query();
        $scope.load = function(id) {
            Contractor.get({id : id}, function(result) {
                $scope.contractor = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('peyekApp:contractorUpdate', result);
            $modalInstance.close(result);
            $scope.isSaving = false;
        };

        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        $scope.save = function () {
            $scope.isSaving = true;
            if ($scope.contractor.id != null) {
                Contractor.update($scope.contractor, onSaveSuccess, onSaveError);
            } else {
                Contractor.save($scope.contractor, onSaveSuccess, onSaveError);
            }
        };

        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
}]);
