var requirejs = require('requirejs');

var config = {
	baseUrl: './js',
    name: 'main',
    out: 'main-min.js'
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
