'use strict';

define([], function () {
    var mainApp = window.mainApp = angular.module('mainApp', ['ngResource', 'ngRoute']);
    mainApp.config(['$routeProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
        function ($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $route) {
            mainApp.register =
            {
                controller: $controllerProvider.register,
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                factory: $provide.factory,
                service: $provide.service,
                routeProvider: $routeProvider
            };

            $routeProvider
                .when('/submodule/:modulename', {
                    templateUrl: function(params) { return 'submodules/' + params.modulename + '/index.html'; }
                })
                .when('/', {
                    redirectTo: '/submodule/submodule1'
                })
                .when('/404', {templateUrl: '../templates/404.html'})
                .otherwise({ redirectTo: function (params, path, search) {
                    if (path === '/false') return '';
                    var subModule = path.split('/')[2];
                    if (!mainApp.loadedModules[subModule]) {
                        require(['../submodules/' + subModule + '/js/main'], function (subModule) {
                            
                                mainApp.register.location.path(path);
                                mainApp.refreshRootScope();    
                        });
                    }
                    return false;
                }})
        }]);
    mainApp.run(function($rootScope, $location, $route) {
        mainApp.register.rootScope = $rootScope;
        mainApp.register.route = $route;
        mainApp.register.location = $location;
        mainApp.isDebugMode = $location.search().debug?true:false;
    });
    mainApp.loadedModules = {};
    mainApp.registerModule = function (moduleName) {
        this.loadedModules[moduleName] = {};
    };
    mainApp.refreshRootScope = function () {
        mainApp.register.rootScope.$apply();
    }
    return mainApp;
});
