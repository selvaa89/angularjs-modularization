require.config({
    paths: {
        "submodule1": '../submodules/submodule1',
        "submodule2": '../submodules/submodule2',
        "mainApp": './app'
    }
});
define(['mainApp'], function (a1, a2) {
    angular.bootstrap(document, ['mainApp']);
});