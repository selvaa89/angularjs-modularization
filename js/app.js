'use strict';

define([], function () {
    /*var loadSubModule = function ()*/
    var mainApp = window.mainApp = angular.module('mainApp', ['ngResource', 'ngRoute']);
    mainApp.config(['$routeProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
        function ($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $route) {
            mainApp.register =
            {
                controller: $controllerProvider.register,
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                factory: $provide.factory,
                service: $provide.service
            };

            $routeProvider
                .when('/submodule/:modulename', {
                    templateUrl: function(params) { return 'submodules/' + params.modulename + '/index.html'; }
                });
                /*.when('/404', {templateUrl: '../templates/404.html'})
                .otherwise({ redirectTo: '/404'})*/
        }]);
    mainApp.run(function($rootScope, $location, $route) {
        mainApp.register.rootScope = $rootScope;
        mainApp.register.route = $route;
        $rootScope.$on( "$routeChangeStart", function () {
            console.log(arguments)
        })});
    mainApp.refreshRootScope = function () {
        debugger
        mainApp.register.rootScope.$apply();
    }
    return mainApp;
});
