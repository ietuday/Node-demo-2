// 1.
// var http = require('http');
// var fs = require('fs');

// var server = http.createServer(function (req, res) {
//     fs.readFile(__dirname + '/message.txt', function (err, data) {
//         res.end(data);
//     });
// });
// server.listen(8000);


// 2.
// var http = require('http');
// var fs = require('fs');

// var server = http.createServer(function (req, res) {
//     var stream = fs.createReadStream(__dirname + '/message.txt');
//     stream.pipe(res);
// });
// server.listen(8000);

// 3.
// var http = require('http');
// var fs = require('fs');
// var oppressor = require('oppressor');

// var server = http.createServer(function (req, res) {
//     var stream = fs.createReadStream(__dirname + '/message.txt');
//     stream.pipe(oppressor(req)).pipe(res);
// });
// server.listen(8000);

//pipe()

// .pipe() is just a function that takes a readable source stream src and hooks the output to a destination writable stream dst:

// src.pipe(dst)

// creating a readable stream


// var Readable = require('stream').Readable;

// var rs = new Readable;
// rs.push('beep ');
// rs.push('boop\n');
// rs.push(null);

// rs.pipe(process.stdout);


// var Readable = require('stream').Readable;
// var rs = Readable();

// var c = 97;
// rs._read = function () {
//     rs.push(String.fromCharCode(c++));
//     if (c > 'z'.charCodeAt(0)) rs.push(null);
// };

// rs.pipe(process.stdout);



// var Readable = require('stream').Readable;
// var rs = Readable();

// var c = 97 - 1;

// rs._read = function () {
//     if (c >= 'z'.charCodeAt(0)) return rs.push(null);
    
//     setTimeout(function () {
//         rs.push(String.fromCharCode(++c));
//     }, 100);
// };

// rs.pipe(process.stdout);

// process.on('exit', function () {
//     console.error('\n_read() called ' + (c - 97) + ' times');
// });
// process.stdout.on('error', process.exit);




process.stdin.on('readable', function () {
    var buf = process.stdin.read(3);
    console.dir(buf);
});