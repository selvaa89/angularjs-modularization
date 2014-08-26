"use strict"
require(['mainApp', 'submodule2/js/app'], function (App, SubModule) {
    App.register.routeProvider
        .when('/submodule/submodule2/one', {
            templateUrl: '/submodules/submodule2/templates/one.html'
        });
    App.registerModule('submodule2');
    App.refreshRootScope();
});