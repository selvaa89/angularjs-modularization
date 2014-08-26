"use strict"
define(['mainApp'], function (App) {
    var submodule2 = angular.module('submodule2', ['ngRoute']);
    App.register.controller('submodule2.controller.oneController', function ($scope) {
        $scope.message = 'This is submodule2';
    });
    App.refreshRootScope();
    return submodule2;
});