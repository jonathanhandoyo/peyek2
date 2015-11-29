'use strict';

describe('Activity Detail Controller', function() {
    var $scope, $rootScope;
    var MockEntity, MockActivity, MockUser, MockProject;
    var createController;

    beforeEach(inject(function($injector) {
        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();
        MockEntity = jasmine.createSpy('MockEntity');
        MockActivity = jasmine.createSpy('MockActivity');
        MockUser = jasmine.createSpy('MockUser');
        MockProject = jasmine.createSpy('MockProject');
        

        var locals = {
            '$scope': $scope,
            '$rootScope': $rootScope,
            'entity': MockEntity ,
            'Activity': MockActivity,
            'User': MockUser,
            'Project': MockProject
        };
        createController = function() {
            $injector.get('$controller')("ActivityDetailController", locals);
        };
    }));


    describe('Root Scope Listening', function() {
        it('Unregisters root scope listener upon scope destruction', function() {
            var eventType = 'peyekApp:activityUpdate';

            createController();
            expect($rootScope.$$listenerCount[eventType]).toEqual(1);

            $scope.$destroy();
            expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
        });
    });
});
