/**
 * Created by hjonathan on 01/12/2015.
 */
'use strict';

angular.module('mainApp')
    /* ****************************************** */
    /* Comments Widget */
    /* ****************************************** */
    .directive('appComments', function() {
        return {
            restrict: 'E',
            templateUrl: 'components/directives/widget-comments.html',
            scope: {
                comments: '='
            },
            link: function(scope, element, attrs){
                scope.submitComment = function(){

                }
            }
        }
    })

    /* ****************************************** */
    /* Projects Widget */
    /* project.state : normal, success, warning, danger */
    /* ****************************************** */
    .directive('appProjects', function() {
        return {
            restrict: 'E',
            templateUrl: 'components/directives/widget-projects.html',
            scope: {
                projects: '='
            },
            link: function(scope, element, attrs){

            }
        }
    });
