"use strict"
define(['mainApp'], function (App) {
    var submodule1 = angular.module('submodule1', ['ngRoute']);
    console.log('mainApp: ', App);
    App.register.controller('submodule1.controller.oneController', ['$scope', function ($scope) {
    	console.log('scope: ', $scope);
        $scope.message = 'This is submodule1';
    }]);
    App.refreshRootScope();
    return submodule1;
});