'use strict';

describe('Document Detail Controller', function() {
    var $scope, $rootScope;
    var MockEntity, MockDocument, MockProject, MockContractor;
    var createController;

    beforeEach(inject(function($injector) {
        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();
        MockEntity = jasmine.createSpy('MockEntity');
        MockDocument = jasmine.createSpy('MockDocument');
        MockProject = jasmine.createSpy('MockProject');
        MockContractor = jasmine.createSpy('MockContractor');
        

        var locals = {
            '$scope': $scope,
            '$rootScope': $rootScope,
            'entity': MockEntity ,
            'Document': MockDocument,
            'Project': MockProject,
            'Contractor': MockContractor
        };
        createController = function() {
            $injector.get('$controller')("DocumentDetailController", locals);
        };
    }));


    describe('Root Scope Listening', function() {
        it('Unregisters root scope listener upon scope destruction', function() {
            var eventType = 'peyekApp:documentUpdate';

            createController();
            expect($rootScope.$$listenerCount[eventType]).toEqual(1);

            $scope.$destroy();
            expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
        });
    });
});
