const readline = require('readline');
const fs = require('fs');
var file = './test.txt';
var linesCount = 0;

var rl = readline.createInterface({
    input: fs.createReadStream(file),
    output: process.stdout,
    terminal: false
});

rl.on('line', function(line) {
    linesCount++; // on each linebreak, add +1 to 'linesCount'
});

rl.on('close', function() {
    console.log(linesCount); // print the result when the 'close' event is called
});
