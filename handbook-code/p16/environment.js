process.argv.forEach(function(val, index, array) {
    var arg = val.split("=");
    if (arg.length > 0) {
        if (arg[0] === 'env') {
            var env = require('./' + arg[1] + '.json');
            console.log(env);
            module.exports = env;
        }
    }
});
