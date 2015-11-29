'use strict';

angular.module('peyekApp')
    .controller('ActivityController', function ($scope, $state, $modal, Activity, ParseLinks) {
      
        $scope.activitys = [];
        $scope.page = 0;
        $scope.loadAll = function() {
            Activity.query({page: $scope.page, size: 20}, function(result, headers) {
                $scope.links = ParseLinks.parse(headers('link'));
                $scope.activitys = result;
            });
        };
        $scope.loadPage = function(page) {
            $scope.page = page;
            $scope.loadAll();
        };
        $scope.loadAll();


        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.activity = {
                description: null,
                type: null,
                id: null
            };
        };
    });
