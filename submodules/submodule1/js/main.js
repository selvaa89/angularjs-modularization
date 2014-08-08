"use strict"
require(['app', 'submodules/submodule1/js/app.js'], function (App, SubModule) {
    /*App.register.route
        .when('/submodules/submodule1/one', {
            templateUrl: '/submodules/submodule1/templates/one.html'
        });*/
    App.register.route.routes['/submodule/submodule1/one'] = {
        templateUrl: '/submodules/submodule1/templates/one.html'
    };
    App.refreshRootScope();
});