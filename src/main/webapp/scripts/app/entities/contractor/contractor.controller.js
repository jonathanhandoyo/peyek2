'use strict';

angular.module('peyekApp')
    .controller('ContractorController', function ($scope, $state, $modal, Contractor, ParseLinks) {
      
        $scope.contractors = [];
        $scope.page = 0;
        $scope.loadAll = function() {
            Contractor.query({page: $scope.page, size: 20}, function(result, headers) {
                $scope.links = ParseLinks.parse(headers('link'));
                $scope.contractors = result;
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
            $scope.contractor = {
                name: null,
                address: null,
                id: null
            };
        };
    });
