'use strict';

angular.module('peyekApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('document', {
                parent: 'entity',
                url: '/documents',
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'Documents'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/document/documents.html',
                        controller: 'DocumentController'
                    }
                },
                resolve: {
                }
            })
            .state('document.detail', {
                parent: 'entity',
                url: '/document/{id}',
                data: {
                    authorities: ['ROLE_USER'],
                    pageTitle: 'Document'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/document/document-detail.html',
                        controller: 'DocumentDetailController'
                    }
                },
                resolve: {
                    entity: ['$stateParams', 'Document', function($stateParams, Document) {
                        return Document.get({id : $stateParams.id});
                    }]
                }
            })
            .state('document.new', {
                parent: 'document',
                url: '/new',
                data: {
                    authorities: ['ROLE_USER'],
                },
                onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state, $modal) {
                    $modal.open({
                        templateUrl: 'scripts/app/entities/document/document-dialog.html',
                        controller: 'DocumentDialogController',
                        size: 'lg',
                        resolve: {
                            entity: function () {
                                return {
                                    name: null,
                                    description: null,
                                    content: null,
                                    id: null
                                };
                            }
                        }
                    }).result.then(function(result) {
                        $state.go('document', null, { reload: true });
                    }, function() {
                        $state.go('document');
                    })
                }]
            })
            .state('document.edit', {
                parent: 'document',
                url: '/{id}/edit',
                data: {
                    authorities: ['ROLE_USER'],
                },
                onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state, $modal) {
                    $modal.open({
                        templateUrl: 'scripts/app/entities/document/document-dialog.html',
                        controller: 'DocumentDialogController',
                        size: 'lg',
                        resolve: {
                            entity: ['Document', function(Document) {
                                return Document.get({id : $stateParams.id});
                            }]
                        }
                    }).result.then(function(result) {
                        $state.go('document', null, { reload: true });
                    }, function() {
                        $state.go('^');
                    })
                }]
            })
            .state('document.delete', {
                parent: 'document',
                url: '/{id}/delete',
                data: {
                    authorities: ['ROLE_USER'],
                },
                onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state, $modal) {
                    $modal.open({
                        templateUrl: 'scripts/app/entities/document/document-delete-dialog.html',
                        controller: 'DocumentDeleteController',
                        size: 'md',
                        resolve: {
                            entity: ['Document', function(Document) {
                                return Document.get({id : $stateParams.id});
                            }]
                        }
                    }).result.then(function(result) {
                        $state.go('document', null, { reload: true });
                    }, function() {
                        $state.go('^');
                    })
                }]
            });
    });
