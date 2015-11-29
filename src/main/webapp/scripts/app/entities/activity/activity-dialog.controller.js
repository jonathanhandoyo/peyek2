'use strict';

angular.module('peyekApp').controller('ActivityDialogController',
    ['$scope', '$stateParams', '$modalInstance', 'entity', 'Activity', 'User', 'Project',
        function($scope, $stateParams, $modalInstance, entity, Activity, User, Project) {

        $scope.activity = entity;
        $scope.users = User.query();
        $scope.projects = Project.query();
        $scope.load = function(id) {
            Activity.get({id : id}, function(result) {
                $scope.activity = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('peyekApp:activityUpdate', result);
            $modalInstance.close(result);
            $scope.isSaving = false;
        };

        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        $scope.save = function () {
            $scope.isSaving = true;
            if ($scope.activity.id != null) {
                Activity.update($scope.activity, onSaveSuccess, onSaveError);
            } else {
                Activity.save($scope.activity, onSaveSuccess, onSaveError);
            }
        };

        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
}]);
