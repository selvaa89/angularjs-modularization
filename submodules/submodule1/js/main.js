"use strict"
(function () {
    debugger
    mainApp.controller('testCtrl', function ($scope, $route) {
        debugger
        $route.routes['/submodules/submodule1/one'] = {
            templateUrl: '/submodules/submodule1/templates/one.html'
        }
    });
})();