'use strict';

angular.module('peyekApp')
    .controller('DocumentController', function ($scope, $state, $modal, Document, ParseLinks) {
      
        $scope.documents = [];
        $scope.page = 0;
        $scope.loadAll = function() {
            Document.query({page: $scope.page, size: 20}, function(result, headers) {
                $scope.links = ParseLinks.parse(headers('link'));
                $scope.documents = result;
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
            $scope.document = {
                name: null,
                description: null,
                content: null,
                id: null
            };
        };
    });
