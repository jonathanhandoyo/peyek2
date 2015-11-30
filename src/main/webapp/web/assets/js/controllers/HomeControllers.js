'use strict';

angular.module('mainApp')
    .controller('HomeController', function ($scope) {

        /* ****************************************** */
        /* Knob Examples */
        /* ****************************************** */
        $scope.knob1 = {
            value:49
        };
        $scope.knob2 = {
            value:59
        };
        $scope.knob3 = {
            value:69
        };
        $scope.knob4 = {
            value:79
        };

        /* ****************************************** */
        /* Comments Examples */
        /* ****************************************** */
        $scope.comments = [
            {
                time: '1 minute ago',
                content: 'Vivamus diam elit diam, consectetur fconsectetur dapibus adipiscing elit.',
                user: {
                    name: 'Arnold',
                    avatar: 'assets/img/user2.png'
                }
            },
            {
                time: '2 hours ago',
                content: 'Vivamus diam elit diam, consectetur fconsectetur dapibus adipiscing elit.',
                user: {
                    name: 'Jonathan',
                    avatar: 'assets/img/user1.png'
                }
            },
            {
                time: '23 Nov 2015',
                content: 'Vivamus diam elit diam, consectetur fconsectetur dapibus adipiscing elit.',
                user: {
                    name: 'Arnold',
                    avatar: 'assets/img/user2.png'
                }
            },
            {
                time: '2 hours ago',
                content: 'Vivamus diam elit diam, consectetur fconsectetur dapibus adipiscing elit.',
                user: {
                    name: 'Jonathan',
                    avatar: 'assets/img/user1.png'
                }
            },
            {
                time: '2 hours ago',
                content: 'Vivamus diam elit diam, consectetur fconsectetur dapibus adipiscing elit.',
                user: {
                    name: 'Jonathan',
                    avatar: 'assets/img/user1.png'
                }
            },
            {
                time: '2 hours ago',
                content: 'Vivamus diam elit diam, consectetur fconsectetur dapibus adipiscing elit.',
                user: {
                    name: 'Jonathan',
                    avatar: 'assets/img/user1.png'
                }
            }
        ];

        /* ****************************************** */
        /* Projects List Examples */
        /* ****************************************** */
        $scope.projects = [
            {
                name: 'Hospital Management System',
                dueDate: '26/2/2012',
                completeness: 80,
                state: 'normal',
                icon: 'fa-hospital-o'
            },
            {
                name: 'School Download System',
                dueDate: '26/2/2012',
                completeness: 40,
                state: 'danger',
                icon: 'fa-university'
            },
            {
                name: 'Question and Answers Script',
                dueDate: '26/2/2012',
                completeness: 95,
                state: 'warning',
                icon: 'fa-globe'
            },
            {
                name: 'Software Downloads Script',
                dueDate: '26/2/2012',
                completeness: 100,
                state: 'success',
                icon: 'fa-desktop'
            }
        ];

    });
