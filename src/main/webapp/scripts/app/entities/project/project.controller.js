'use strict';

angular.module('peyekApp')
    .controller('ProjectController', function ($scope, $state, $modal, Project, ParseLinks) {
      
        $scope.projects = [];
        $scope.page = 0;
        $scope.loadAll = function() {
            Project.query({page: $scope.page, size: 20}, function(result, headers) {
                $scope.links = ParseLinks.parse(headers('link'));
                $scope.projects = result;
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
            $scope.project = {
                name: null,
                description: null,
                content: null,
                id: null
            };
        };
    });
