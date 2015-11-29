'use strict';

describe('Contractor Detail Controller', function() {
    var $scope, $rootScope;
    var MockEntity, MockContractor, MockDocument, MockProject;
    var createController;

    beforeEach(inject(function($injector) {
        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();
        MockEntity = jasmine.createSpy('MockEntity');
        MockContractor = jasmine.createSpy('MockContractor');
        MockDocument = jasmine.createSpy('MockDocument');
        MockProject = jasmine.createSpy('MockProject');
        

        var locals = {
            '$scope': $scope,
            '$rootScope': $rootScope,
            'entity': MockEntity ,
            'Contractor': MockContractor,
            'Document': MockDocument,
            'Project': MockProject
        };
        createController = function() {
            $injector.get('$controller')("ContractorDetailController", locals);
        };
    }));


    describe('Root Scope Listening', function() {
        it('Unregisters root scope listener upon scope destruction', function() {
            var eventType = 'peyekApp:contractorUpdate';

            createController();
            expect($rootScope.$$listenerCount[eventType]).toEqual(1);

            $scope.$destroy();
            expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
        });
    });
});
