"use strict"
define(['app'], function (App) {
    var submodule1 = angular.module('submodule1', ['ngRoute']);
    submodule1.controller('submodule1.controller.oneController', function ($scope) {
        $scope.message = 'This is submodule1';
    });
    return submodule1;
});