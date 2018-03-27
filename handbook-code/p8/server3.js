//Require the file System module
var fs = require('fs');

/*
 Create readable stream to file in current directory (__dirname) named 'node.txt'
 Use utf8 encoding
 Read the data in 16-kilobyte chunks
*/

var readable = fs.createReadStream(__dirname + '/test.txt', {
    encoding: 'utf8',
    highWaterMark: 16 *
        1024
});

// create writable stream
var writable = fs.createWriteStream(__dirname + '/testCopy.txt');

// Write each chunk of data to the writable stream
readable.on('data', function(chunk) {
    writable.write(chunk);
    console.log(chunk);
});
