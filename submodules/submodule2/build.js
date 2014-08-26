var requirejs = require('requirejs');

var config = {
    name: 'js/main',
    out: 'js/main-min.js',
    paths: {
        submodule1: '../submodule1',
        mainApp: '../../js/app',
        submodule2: '../submodule2'
    },
    exclude: ['mainApp']
};

requirejs.optimize(config, function (buildResponse) {
    //buildResponse is just a text output of the modules
    //included. Load the built file for the contents.
    //Use config.out to get the optimized file contents.
    var contents = fs.readFileSync(config.out, 'utf8');
}, function(err) {
    console.log(err);
    //optimization err callback
});
