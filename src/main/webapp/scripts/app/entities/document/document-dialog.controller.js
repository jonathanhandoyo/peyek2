'use strict';

angular.module('peyekApp').controller('DocumentDialogController',
    ['$scope', '$stateParams', '$modalInstance', 'entity', 'Document', 'Project', 'Contractor',
        function($scope, $stateParams, $modalInstance, entity, Document, Project, Contractor) {

        $scope.document = entity;
        $scope.projects = Project.query();
        $scope.contractors = Contractor.query();
        $scope.load = function(id) {
            Document.get({id : id}, function(result) {
                $scope.document = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('peyekApp:documentUpdate', result);
            $modalInstance.close(result);
            $scope.isSaving = false;
        };

        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        $scope.save = function () {
            $scope.isSaving = true;
            if ($scope.document.id != null) {
                Document.update($scope.document, onSaveSuccess, onSaveError);
            } else {
                Document.save($scope.document, onSaveSuccess, onSaveError);
            }
        };

        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
}]);
