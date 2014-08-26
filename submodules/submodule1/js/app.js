"use strict"
define(['mainApp'], function (App) {
    var submodule1 = angular.module('submodule1', ['ngRoute']);
    App.register.controller('submodule1.controller.oneController', function ($scope) {
        $scope.message = 'This is submodule1';
    });
    App.refreshRootScope();
    return submodule1;
});