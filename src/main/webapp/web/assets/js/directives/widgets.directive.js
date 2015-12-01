/**
 * Created by hjonathan on 01/12/2015.
 */
'use strict';

angular.module('mainApp')
    /* ****************************************** */
    /* Comments Widget */
/*
    *
    * comments: [
    *   {
    *       user: {
    *           name: string,
    *           avatar: string
    *       },
    *       time: string,
    *       content: string
    *   }
    * ]
    *
    * */
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
    /*
    *
    * projects: [
    *   {
    *       name: string,
    *       dueDate: string,
    *       icon: string (fa-*),
    *       completeness: int,
    *       state: string (_blank_, 'warning', 'danger', 'success')
    *   }
    * ]
    *
    * */
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
    })

    /* ****************************************** */
    /* Timeline Widget */
    /*
    *
    *
    * title: string
    * milestones:  [
    *   {
    *       date: string,
    *       highlight: string,
    *       content: richText,
    *       album: {
    *           items: [
    *               {
    *                   src: string
    *               }
    *           ]
    *       },
    *       notifications: [
    *           {
    *               text: richText
    *           }
    *       ]
    *   }
    * ]
    *
    * */
    /* ****************************************** */
    .directive('appTimeline', function() {
        return {
            restrict: 'E',
            templateUrl: 'components/directives/widget-timeline.html',
            scope: {
                title: '@',
                milestones: '='
            },
            link: function(scope, element, attrs){

            }
        }
    })

    /* ****************************************** */
    /* Map Widget */
    /* ****************************************** */
    .directive('appMap', function() {
        return {
            restrict: 'E',
            templateUrl: 'components/directives/widget-map.html',
            scope: {

            },
            link: function(scope, element, attrs){

            }
        }
    });
