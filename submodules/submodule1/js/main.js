"use strict"
require(['mainApp', 'submodule1/js/app'], function (App, SubModule) {
    App.register.routeProvider
        .when('/submodule/submodule1/one', {
            templateUrl: 'submodules/submodule1/templates/one.html'
        });
    App.refreshRootScope();
    App.registerModule('submodule1');
});