const readline = require('readline');
const fs = require('fs');
var file = './test.txt';

var rl = readline.createInterface({
    input: fs.createReadStream(file),
    output: process.stdout,
    terminal: false
});

rl.on('line', function(line) {
    console.log(line) // print the content of the line on each linebreak
});
