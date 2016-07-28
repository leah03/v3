'use strict';

describe('Controller: AppController', function () {

  // load the controller's module
  beforeEach(module('v3App'));

  var AppCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppCtrl = $controller('AppCtrl', {
      $scope: scope
      
    });
  }));

  it('should set value of isAuthenticated to false', function () {
    expect($scope.isAuthenticated).toBe(true);
  });
});
