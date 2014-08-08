"use strict"
require(['app', 'submodules/submodule2/js/app.js'], function (App, SubModule) {
    App.register.routeProvider
        .when('/submodule/submodule2/one', {
            templateUrl: '/submodules/submodule2/templates/one.html'
        });
    App.refreshRootScope();
});