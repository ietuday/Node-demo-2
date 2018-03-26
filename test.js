    var http = require('http');
    var fs = require('fs');
    var path = require('path');

  //   const options = {
  //     host: 'www.stackoverflow.com',
  //     port: 80,
  //     path: '/index.html'
  //   };


  //   console.log('Start');
  //   setTimeout(() => console.log('TO1'), 0);
  //   setImmediate(() => console.log('IM1'));
  //   process.nextTick(() => console.log('NT1'));
  //   setImmediate(() => console.log('IM2'));
  //   process.nextTick(() => console.log('NT2'));
  //   http.get(options, () => console.log('IO1'));
  //   fs.readdir(process.cwd(), () => console.log('IO2'));
  //   setImmediate(() => console.log('IM3'));
  //   process.nextTick(() => console.log('NT3'));
  //   setImmediate(() => console.log('IM4'));
  //   fs.readdir(process.cwd(), () => console.log('IO3'));
  //   console.log('Done');


  //   function step(iteration) {
  //     if (iteration === 10) return;
  //     setImmediate(() => {
  //       console.log(`setImmediate iteration: ${iteration}`);
  //       step(iteration + 1); // Recursive call from setImmediate handler.
  //     });
  //     process.nextTick(() => {
  //       console.log(`nextTick iteration: ${iteration}`);
  //     });
  // }

  //   step(0);

// setTimeout(function() {
//     console.log("TIMEOUT");
// }, 0);

// setImmediate(function() {
//     console.log("IMMEDIATE");
// });

// process.nextTick(function() {
//     console.log("NEXTTICK");
// });

// var tasks = [
 
//   {
 
//     'name'     : 'Write for Envato Tuts+',
 
//     'duration' : 120
 
//   },
 
//   {
 
//     'name'     : 'Work out',
 
//     'duration' : 60
 
//   },
 
//   {
 
//     'name'     : 'Procrastinate on Duolingo',
 
//     'duration' : 240
 
//   }
 
// ];

// var task_names = tasks.map((task) => task.name );
// console.log(task_names);

// var difficult_tasks = tasks.filter((task) => task.duration >= 120 );
// console.log(difficult_tasks);

// console.log(path.normalize('/foo/bar/..'));
// console.log(path.normalize('/foo//bar/bas/..'));
// console.log(path.join('foo', '/bar', 'bas'));

// var completePath = '/foo/bar/bas.html';

// console.log(path.dirname(completePath));
// console.log(path.basename(completePath));
// console.log(path.extname(completePath));
    
// Writing Into a file

// fs.writeFileSync('test.txt', 'Hello fs!');

//Reading from a file 
// console.log(fs.readFileSync('test.txt').toString());

//Deleting a file synchronously

// var fs = require('fs');
// try {
//  fs.unlinkSync('./test.txt');
//  console.log('test.txt successfully deleted');
// }
// catch (err) {
//  console.log('Error:', err);
// }

//Deleting a file Asynchronouly
// var fs = require('fs');
// fs.unlink('./test.txt', function (err) {
//  if (err) {
//  console.log('Error:', err);
//  }
//  else {
//  console.log('test.txt successfully deleted');
//  }
// });

//OS Module

// var os = require('os');
// var gigaByte = 1 / (Math.pow(1024, 3));
// console.log('Total Memory', os.totalmem() * gigaByte, 'GBs');
// console.log('Available Memory', os.freemem() * gigaByte, 'GBs');
// console.log('Percent consumed', 100 * (1 - os.freemem() / os.totalmem()));
// console.log('This machine has', os.cpus().length, 'CPUs');

//Util Module

// var util = require('util');
// util.log('sample message'); 

// var name = 'nate';
// var money = 33;
// console.log(util.format('%s has %d dollars', name, money));

// console.log(util.isArray([])); // true
// console.log(util.isArray({ length: 0 })); // false
// console.log(util.isDate(new Date())); // true
// console.log(util.isDate({})); // false
// console.log(util.isError(new Error('This is an error'))); // true
// console.log(util.isError({ message: 'I have a message' })); // false

// Browserify Demo and AMD

// var foo = require('./foo');
// var bar = require('./bar');
// foo();
// bar.log();

// JSON Vs Javascript Object 

// var foo = {
//  a: 1,
//  b: 'a string',
//  c: true
// };

// console.log("Type of foo : ", typeof foo);

// // convert a JavaScript object to a string
// var json = JSON.stringify(foo);
// console.log("json: ",json);
// console.log("Type of json : ",typeof json); // string

//UndserScore Module 

// var _ = require('underscore');
// console.log(_.min([3, 1, 2])); // 1

// filter with Underscore
// var foo = [1, 10, 50, 200, 900, 90, 40];
// var _ = require('underscore');
// var results = _.filter(foo, function (item) { return item > 100 });
// console.log(results);

// map with Underscore
// var foo = [1, 2, 3, 4];
// var _ = require('underscore');
// var results = _.map(foo, function (item) { return item * 2 });
// console.log(results);

// const animals = [
//                     {
//                         "name": "cat",
//                         "size": "small",
//                         "weight": 5
//                     },
//                     {
//                         "name": "dog",
//                         "size": "small",
//                         "weight": 10
//                     },
//                     {
//                         "name": "lion",
//                         "size": "medium",
//                         "weight": 150
//                     },
//                     {
//                         "name": "elephant",
//                         "size": "big",
//                         "weight": 5000
//                     }
//               ]

// let animal_names = animals.map((animal, index, animals)=>{
//   console.log("Current Item : ",animal);
//   console.log("Current Index : ",index);
//   console.log("Current Array : ",animals);

//   return animal.name;
// })

// console.log('Animal Names : ',animal_names);

// let small_animals = animals.filter((animal) => {
//     return animal.size === "small"
// })

// console.log(small_animals);

// var _ = require('underscore');
// var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// console.log(odds); // [1, 3, 5]


// var _ = require('underscore');
// var numbers = [10, 5, 100, 2, 1000];
// console.log(_.min(numbers)); // 2
// console.log(_.max(numbers)); // 1000

//a library that offers better command line handling("optimist")
// var argv = require('optimist').argv;
// delete argv['$0'];
// console.log(argv);

//Handling Date

// var now = new Date();
// console.log('now is:', now);

// // get sections of time
// var milliseconds = now.getMilliseconds();
// console.log("milliseconds : ",milliseconds);
// var seconds = now.getSeconds();
// console.log("seconds : ",seconds);
// var hours = now.getHours();
// console.log("hours : ",hours);
// var minutes = now.getMinutes();
// console.log("minutes : ",minutes);
// var date = now.getDate();
// console.log("date : ",date);
// var month = now.getMonth();
// console.log("month : ",month);
// var year = now.getFullYear();
// console.log("year : ",year);


// // detailed constructor for a date
// var dateCopy = new Date(year, month, date,
//  hours, minutes, seconds, milliseconds);
// console.log('copy is:', dateCopy);

// // Other dates
// // year, month, date
// console.log('1 jan 2014:', new Date(2014, 0, 1));
// // year, month, date, hour
// console.log('1 jan 2014 9am', new Date(2014, 0, 1, 9));

//Handling Date with moment.js

// var moment = require('moment');
// // From date to moment
// var wrapped = moment(new Date());
// console.log(wrapped);
// // From moment to date
// var date = wrapped.toDate();
// console.log(date);

// var moment = require('moment');
// // From string to date
// console.log(moment("12-25-1995", "MM-DD-YYYY").toDate());
// console.log(moment("2010-10-20 4:30", "YYYY-MM-DD HH:mm").toDate());

// var moment = require('moment');
// var date = new Date(2010, 1, 14, 15, 25, 50);
// var wrapped = moment(date);
// // "Sunday, February 14th 2010, 3:25:50 pm"
// console.log(wrapped.format('"dddd, MMMM Do YYYY, h:mm:ss a"'));
// // "Sun, 3PM"
// console.log(wrapped.format("ddd, hA"));

// var a = moment([2007, 0, 15]); // 15 Jan 2007
// var b = moment([2007, 0, 16]); // 16 Jan 2007
// var c = moment([2007, 1, 15]); // 15 Feb 2007
// var d = moment([2008, 0, 15]); // 15 Jan 2008
// console.log(a.from(b)); // "a day ago"
// console.log(a.from(c)); // "a month ago"
// console.log(a.from(d)); // "a year ago"
// console.log(b.from(a)); // "in a day"
// console.log(c.from(a)); // "in a month"
// console.log(d.from(a)); // "in a year" 

// var date = new Date(Date.UTC(2007, 0, 1));
// console.log('Original', date);
// // To JSON
// var jsonString = date.toJSON();
// console.log(jsonString); // 2007-01-01T00:00:00.000Z
// // From JSON
// console.log('Round Tripped',new Date(jsonString)); 


// //toJson

// var foo = {};
// var bar = { 'foo': foo };
// // Uncustomized serialization
// console.log(JSON.stringify(bar)); // {"foo":{}}
// // Customize serialization
// foo.toJSON = function () { return "custom" };
// console.log(JSON.stringify(bar)); // {"foo":"custom"}


// require('colors');
// console.log('hello'.green); // outputs green text
// console.log('world!'.red); // outputs red text
// console.log('Feeling yellow'.yellow); // outputs yellow text
// console.log('But you look blue'.blue); // outputs yellow text
// console.log('This should cheer you up!'.rainbow); // rainbow

// var parseString = require('xml2js').parseString;
// var xml = '<?xml version="1.0" encoding="UTF-8" ?><business><company>Code Blog</company><owner>Nic Raboy</owner><employee><firstname>Nic</firstname><lastname>Raboy</lastname></employee><employee><firstname>Maria</firstname><lastname>Campos</lastname></employee></business>';

// parseString(xml, function (err, result) {
//     console.log(JSON.stringify(result));
// });

// console.log(fs.readFileSync('test.xml').toString());
																																																																
// var xml = fs.readFileSync('test.xml').toString();

// var convert = require('xml-js');

// var result1 = convert.xml2json(xml, {compact: true, spaces: 4});
// var result2 = convert.xml2json(xml, {compact: false, spaces: 4});
// console.log(result1, '\n', result2);

//Changing Console Color

// function getRed(str) {
//  // Changes the console foreground to red
//  var redCode = '\x1b[31m';
//  // Resets the console foreground
//  var clearCode = '\x1b[39m';
//  return redCode + str + clearCode;
// }

// console.log(getRed('Hello World!'));


//Prototype

// Array.prototype.foo = 123;
// Number.prototype.foo = 123;
// String.prototype.foo = 123;
// var arr = [];
// var str = '';
// var num = 1;
// console.log(arr.foo); // 123
// console.log(str.foo); // 123
// console.log(num.foo); // 123

// String.prototype.red = function (str) {
//  // Changes the console foreground to red
//  var redCode = '\x1b[31m';
//  // Resets the console foreground
//  var clearCode = '\x1b[39m';
//  return redCode + this + clearCode;
// }
// console.log('Hello World!'.red());


// var foo = {};
// foo.__defineGetter__('bar', function () {
//  console.log('get bar was called!');
// });
// foo.__defineSetter__('bar', function (val) {
//  console.log('set bar was called with value:',val);
// });
// // get
// foo.bar;
// // set
// foo.bar = 'something';

// function Animal(name) {
//  this.name = name;
// }
// Animal.prototype.walk = function (destination) {
//  console.log(this.name, 'is walking to', destination);
// };
// var animal = new Animal('elephant');
// animal.walk('melbourne'); // elephant is walking to melbourne

// var foo = {};
// var bar = {};
// // A function that uses `this`
// function func(val) {
//  this.val = val;
// }
// // Force this in func to be foo
// func.call(foo, 123);
// // Force this in func to be bar
// func.call(bar, 456);
// // Verify:
// console.log(foo.val); // 123
// console.log(bar.val); // 456

// Animal Base class

// function Animal(name) {
//  this.name = name;
// }

// Animal.prototype.walk = function (destination) {
//   console.log("this: Animal.prototype.walk",this);
//  console.log(this.name, 'is walking to', destination);
// };

// var animal = new Animal('elephant');

// animal.walk('melbourne'); // elephant is walking to melbourne

// // util function
// var inherits = require('util').inherits;
// // Bird Child class
// function Bird(name) {
//  // Call parent constructor
//  Animal.call(this, name);
//  // Additional construction code
// }
// inherits(Bird, Animal);
// // Additional member functions
// Bird.prototype.fly = function (destination) {
//  console.log(this.name, 'is flying to', destination);
// }
// var bird = new Bird('sparrow');
// bird.walk('sydney'); // sparrow is walking to sydney
// bird.fly('melbourne'); // sparrow is flying to melbourne

//Overriding Using ProtoTypeInheritence

// util function
// var inherits = require('util').inherits;

// // Base

// function Base() { this.message = "message"; };

// Base.prototype.foo = function () { return this.message + " base foo" };

// // Child

// function Child() { Base.call(this); };

// inherits(Child, Base);
// // Overide parent behaviour in child
// Child.prototype.foo = function () {
//  // Call base implementation + customize
//  return Base.prototype.foo.call(this) + " child foo";
// }

// // Test:

// var child = new Child();
// var base = new Base();

// console.log(child.foo()); // message base foo child foo
// console.log(base.foo());

// Node.js Events

// var EventEmitter = require('events').EventEmitter;
// var emitter = new EventEmitter();

// // Subscribe
// emitter.on('foo', function (arg1, arg2) {
//  console.log('Foo raised, Args:', arg1, arg2);
// });

// // Emit
// emitter.emit('foo', { a: 123 }, { b:   });


// var EventEmitter = require('events').EventEmitter;
// var emitter = new EventEmitter();

// emitter.on('foo', function () {
//  console.log('subscriber 1');
// });

// emitter.on('foo', function () {
//  console.log('subscriber 2');
// });

// // Emit
// emitter.emit('foo');

// var EventEmitter = require('events').EventEmitter;
// var emitter = new EventEmitter();

// emitter.on('foo', function (ev) {
//  console.log('subscriber 1:', ev);
//  ev.handled = true;
// });

// emitter.on('foo', function (ev) {
//  if (ev.handled) {
//  console.log('event already handled');
//  }
// });

// // Emit
// emitter.emit('foo', { handled: false });


// var EventEmitter = require('events').EventEmitter;
// var emitter = new EventEmitter();

// var fooHandler = function () {
//  console.log('handler called');
//  // Unsubscribe
//  emitter.removeListener('foo',fooHandler);
// };

// emitter.on('foo', fooHandler);

// // Emit twice
// emitter.emit('foo');
// emitter.emit('foo');

// var EventEmitter = require('events').EventEmitter;
// var emitter = new EventEmitter();

// emitter.once('foo', function () {
//  console.log('foo has been raised');
// });

// // Emit twice
// emitter.emit('foo');
// emitter.emit('foo');

// var EventEmitter = require('events').EventEmitter;
// var emitter = new EventEmitter();

// emitter.on('foo', function a() { });
// emitter.on('foo', function b() { });

// console.log(emitter.listeners('foo')); // [ [Function: a], [Function: b] ]

// var EventEmitter = require('events').EventEmitter;
// var emitter = new EventEmitter();

// // Listener addition / removal notifications
// emitter.on('removeListener', function (eventName, listenerFunction) {
//  console.log(eventName, 'listener removed', listenerFunction.name);
// });

// emitter.on('newListener', function (eventName, listenerFunction) {
//  console.log(eventName, 'listener added', listenerFunction.name);
// });

// function a() { }
// function b() { }

// // Add
// emitter.on('foo', a);
// emitter.on('foo', b);

// // Remove
// emitter.removeListener('foo', a);
// emitter.removeListener('foo', b);

// var EventEmitter = require('events').EventEmitter;
// var emitter = new EventEmitter();

// var listenersCalled = 0;

// function someCallback() {
//  // Add a listener
//  emitter.on('foo', function () { listenersCalled++ });
//  // return from callback
// }

// for (var i = 0; i < 20; i++) {
//  someCallback();
// }

// emitter.emit('foo');

// console.log('listeners called:', listenersCalled); // 20


// var EventEmitter = require('events').EventEmitter;
// var emitter = new EventEmitter();

// // increase limit to 30
// emitter.setMaxListeners(30);

// // subscribe 20 times
// // No warning will be printed
// for (var i = 0; i < 20; i++) {
//  emitter.on('foo', function () { });
// }

// console.log('done');


//Error Event

// var EventEmitter = require('events').EventEmitter;
// var emitter = new EventEmitter();

// // Emit an error event
// // Since there is no listener for this event the process terminates
// emitter.emit('error', new Error('Something horrible happened'));

// console.log('this line never executes');


// var EventEmitter = require('events').EventEmitter;
// var inherits = require('util').inherits;

// // Custom class
// function Foo() {
//   console.log('Inside Foo : this->',this);
//  EventEmitter.call(this);
// }

// inherits(Foo, EventEmitter);

// // Sample member function that raises an event
// Foo.prototype.connect = function () {
//  this.emit('connected');
// }

// // Usage
// var foo = new Foo();

// foo.on('connected', function () {
//  console.log('connected raised!');
// });

// foo.connect();

// Global Exception Handler

// process.on('uncaughtException', function (err) {
//  console.log('Caught exception: ', err);
//  console.log('Stack:', err.stack);
//  process.exit(1);
// });

// // Intentionally cause an exception, but don't try/catch it.
// nonexistentFunc();

// console.log('This line will not run.');

//Exit

// process.on('exit', function (code) {
//  console.log('Exiting with code:', code);
// });

// process.exit(1);

// Signals

// setTimeout(function () {
//  console.log('5 seconds passed. Exiting');
// }, 5000);

// console.log('Started. Will exit in 5 seconds');

// process.on('SIGINT', function () {
//  console.log('Got SIGINT. Ignoring.');
// });

// Streams

// var stream = require('stream');
// var EventEmitter = require('events').EventEmitter;

// console.log(new stream.Stream() instanceof EventEmitter); // true
// console.log(new stream.Readable({}) instanceof stream.Stream); // true
// console.log(new stream.Writable({}) instanceof stream.Stream); // true
// console.log(new stream.Duplex({}) instanceof stream.Stream); // true
// console.log(new stream.Transform({}) instanceof stream.Stream); // true

//Pipe

// var fs = require('fs');

// // Create readable stream
// var readableStream = fs.createReadStream('./server.js');

// // Pipe it to stdout
// readableStream.pipe(process.stdout);

//Creating Zip of a File

// var fs = require('fs');
// var gzip = require('zlib').createGzip();

// var inp = fs.createReadStream('test.xml');
// var out = fs.createWriteStream('test.xml.gz');

// // Pipe chain
// inp.pipe(gzip).pipe(out);

//Reading from console

// process.stdin.on('readable', function () {
//  var buf = process.stdin.read();
 
//  if (buf != null) {
//  console.log('Got:');
//  process.stdout.write(buf.toString());
//  }else {
//  console.log('Read complete!');
//  }

// });

// Writing to Writable Streams

// var fs = require('fs');

// var ws = fs.createWriteStream('message.txt');

// ws.write('foo bar ');

// ws.end('bas');

// Creating a Readable Stream

// var Readable = require('stream').Readable;
// var util = require('util');

// function Counter() {
//  Readable.call(this);
//  this._max = 1000;
//  this._index = 1;
// }

// util.inherits(Counter, Readable);

// Counter.prototype._read = function () {
//  var i = this._index++;
//  if (i > this._max)
//  this.push(null);
//  else {
//  var str = ' ' + i;
//  this.push(str);
//  }
// };

// // Usage, same as any other readable stream
// var counter = new Counter();
// counter.pipe(process.stdout);

// Creating a Writable Stream

// var Writable = require('stream').Writable;
// var util = require('util');

// function Logger() {
//  Writable.call(this);
// }

// util.inherits(Logger, Writable);

// Logger.prototype._write = function (chunk) {
//  console.log(chunk.toString());
// };

// // Usage, same as any other Writable stream
// var logger = new Logger();

// var readStream = require('fs').createReadStream('message.txt');

// readStream.pipe(logger);

//HTTP

// var http = require('http');

// var server = http.createServer(function (request, response) {
//  console.log('request headers...');
//  console.log(request.headers);
//  // respond
//  response.write('hello client!');
//  response.end();
// });

// server.listen(3000);

// console.log('Server running at http://127.0.0.1:3000/');

// var mime = require('mime');
// mime.lookup('/path/to/file.txt'); // => 'text/plain'
// mime.lookup('file.txt'); // => 'text/plain'
// mime.lookup('.TXT'); // => 'text/plain'
// mime.lookup('htm'); // => 'text/html'

// console.log(mime);

//Serving Static File

// var http = require('http');
// var fs = require('fs');

// function send404(response) {
//  response.writeHead(404, { 'Content-Type': 'text/plain' });
//  response.write('Error 404: Resource not found.');
//  response.end();
// }

// var server = http.createServer(function (req, res) {
//  if (req.method == 'GET' && req.url == '/') {
//  res.writeHead(200, { 'content-type': 'text/html' });
//  fs.createReadStream('./test.html').pipe(res);
//  }else {
//  send404(res);
//  }
// }).listen(3000);

// console.log('server running on port 3000');

// Serving a Directory

// var http = require('http');
// var fs = require('fs');
// var path = require('path');

// function send404(response) {
//  response.writeHead(404, { 'Content-Type': 'text/plain' });
//  response.write('Error 404: Resource not found.');
//  response.end();
// }

// var mimeLookup = {
//  '.js': 'application/javascript',
//  '.html': 'text/html'
// };

// var server = http.createServer(function (req, res) {
//  if (req.method == 'GET') {
//  // resolve file path to filesystem path
//  var fileurl;
//  if (req.url == '/') fileurl = '/index.html';
//  else fileurl = req.url;
//  var filepath = path.resolve('./public' + fileurl);
//  // lookup mime type
//  var fileExt = path.extname(filepath);
//  var mimeType = mimeLookup[fileExt];
//  if (!mimeType) {
//  send404(res);
//  return;
//  }

//  // see if we have that file
//  fs.exists(filepath, function (exists) {
//  // if not
//  if (!exists) {
//  send404(res);
//  return;
//  };
 
//  // finally stream the file
//  res.writeHead(200, { 'content-type': mimeType });
//  fs.createReadStream(filepath).pipe(res);
//  });
//  }else {
//  send404(res);
//  }
// }).listen(3000);

// console.log('server running on port 3000');

// Creating a Bare-Bones Connect Application

// var connect = require('connect');

// // Create a connect dispatcher and register with http
// var app = connect()
//  .listen(3000);

// console.log('server running on port 3000');

// Middleware is basically any software that sits between your application code and some low level API.

// var connect = require('connect');

// // Create a connect dispatcher and register with http
// var app = connect()
//  // register a middleware
//  .use(function (req, res, next) { next(); })
//  .listen(3000);

// console.log('server running on port 3000');


// var util = require('util');

// // a simple logging middleware
// function logit(req, res, next) {
//  util.log(util.format('Request recieved: %s, %s', req.method, req.url));
//  next();
// }

// var connect = require('connect');

// connect()
//  .use(logit)
//  .listen(3000);



// var echo = {
//     handle: function(req, res, next) {
//         req.pipe(res);
//         console.log(res);
//     }
// };
// var connect = require('connect');
// connect()
//     .use(echo)
//     .listen(3000);

// Configurable middleware creator
// function greeter(message) {
//     return function(req, res, next) {
//         res.end(message);
//     };
// }

// var helloWorldGreeter = greeter('Hello world!');
// var heyThereGreeter = greeter('Hey there!');
// var connect = require('connect');

// connect()
//     .use('/hello', helloWorldGreeter)
//     .use('/hey', heyThereGreeter)
//     .listen(3000);


// function parseJSON(req, res, next) {
//     if (req.headers['content-type'] == 'application/json') {

//         // Load all the data
//         var readData = '';
//         req.on('readable', function() {
//             readData += req.read();
//         });

//         // Try to parse
//         req.on('end', function() {
//             try {
//                 req.body = JSON.parse(readData);
//             } catch (e) {}
//             next();
//         })
//     } else {
//         next();
//     }

// }

// var connect = require('connect');
// connect()
//     .use(parseJSON)
//     .use(function(req, res) {
//         if (req.body) {
//             res.end('JSON parsed!, value of foo: ' + req.body.foo);
//         } else {
//             res.end('no JSON detected!');
//         }
//     })
//     .listen(3000);


// function auth(req, res, next) {
//     function send401() {
//         res.writeHead(401, { 'WWW-Authenticate': 'Basic' });
//         res.end();
//     }

//     var authHeader = req.headers.authorization;
//     if (!authHeader) {
//         send401();
//         return;
//     }

//     var auth = new Buffer(authHeader.split(' ')[1], 'base64').toString().split(':');
//     console.log("auth : ",auth);
//     var user = auth[0];
//     console.log("User : ",user);
//     var pass = auth[1];
//     console.log("Pass : ",pass);

//      if (user == 'foo' && pass == 'bar') {
//          next(); // all good
//      } else {
//          send401();
//      }
//  }

// var connect = require('connect');
// connect()
//     .use(auth)
//     .use(function(req, res) { res.end('Authorized!'); })
//     .listen(3000);

//For Specific area only auth can be used
// connect()
//  .use('/admin', auth)
//  .use('/admin', function (req, res) { res.end('Authorized!'); })
//  .use(function (req, res) { res.end('Public') })
//  .listen(3000);

// var connect = require('connect');
// connect()
//     .use(function(req, res, next) { next('An error has occurred!') })
//     .use(function(req, res, next) { res.end('I will never get called'); })
//     .listen(3000);

// var connect = require('connect');

// connect()
//     .use(function(req, res, next) { next(new Error('Big bad error details')); })
//     .use(function(req, res, next) { res.end('I will never get called'); })
//     .use(function(err, req, res, next) {
//         // Log the error on the server
//         console.log('Error handled:', err.message);
//         console.log('Stacktrace:', err.stack);
//         // inform the client
//         res.writeHead(500);
//         res.end('Unable to process the request');
//     })
//     .listen(3000);

// var connect = require('connect');
// connect()
//     .use(function() {
//         throw new Error('Big bad error details'); })
//     .use(function(req, res, next) { res.end('I will never get called'); })
//     .use(function(err, req, res, next) {
//         console.log('Error handled:', err.message);
//         res.writeHead(500);
//         res.end('Server error!');
//     })
//     .listen(3000);


// var connect = require('connect');
// connect()
//     .use(function(req, res, next) { next(); })
//     .use(function(err, req, res, next) {
//         res.end('Error occured!');
//     })
//     .use(function(req, res, next) { res.end('No error'); })
//     .listen(3000);

// Using Https 

// Generating a Private Key
//Fire these commands 

// 1.$ openssl genrsa 1024 > key.pem
// 2.$ openssl req -x509 -new -key key.pem > cert.pem


// var https = require('https');
// var fs = require('fs');
// var options = {
//     key: fs.readFileSync('./key.pem'),
//     cert: fs.readFileSync('./cert.pem')
// };
// https.createServer(options, function(req, res) {
//     res.end('hello client!');
// }).listen(3000);


// var https = require('https');
// var fs = require('fs');
// var options = {
//     key: fs.readFileSync('./key.pem'),
//     cert: fs.readFileSync('./cert.pem')
// };

// var connect = require('connect');

// // Create a connect dispatcher
// var app = connect();

// // Register with https
// https.createServer(options, app)
//     .listen(3000);


//  var https = require('https');
// var fs = require('fs');
// var options = {
//     key: fs.readFileSync('./key.pem'),
//     cert: fs.readFileSync('./cert.pem')
// };

// https.createServer(options, function(req, res) {
//     res.end('secure!');
// }).listen(443);

// // Redirect from http port 80 to https
// var http = require('http');

// http.createServer(function(req, res) {
//     res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
//     res.end();
// }).listen(80);

// Express JS

// var express = require('express'),
//     http = require('http');

// // Create an express application
// var app = express()

//     // register a middleware
//     .use(function(req, res, next) {
//         res.end('hello express!');
//     });

// // Register with http
// http.createServer(app)
//      .listen(3000);

// var express = require('express');

// express()
//     .use(function(req, res, next) {
//         res.end('hello express!');
//     })
//     .listen(3000);

// Serving Static Pages
// var express = require('express');
// var serveStatic = require('serve-static');

// var app = express()
//     .use(serveStatic(__dirname + '/public'))
//     .listen(3000);


// var express = require('express');
// var app = express()
//  .use(express.static(__dirname + '/public'))
//  .listen(3000);


// var express = require('express');
// var serveIndex = require('serve-index');

// var app = express()
//  .use(express.static(__dirname + '/public'))
//  .use(serveIndex(__dirname + '/public'))
//  .listen(3000);

// var express = require('express');
// var bodyParser = require('body-parser');
// var app = express()
//     .use(bodyParser())
//     .use(function(req, res) {
//         if (req.body.foo) {
//             res.end('Body parsed! Value of foo: ' + req.body.foo);
//         } else {
//             res.end('Body does not have foo!');
//         }
//     })
//     .use(function(err, req, res, next) {
//         res.end('Invalid body!');
//     })
//     .listen(3000);


// var express = require('express');
// var app = express()
//     .use(function(req, res) {
//         res.cookie('name', 'foo');
//         res.end('Hello!');
//     })
//     .listen(3000);


// var express = require('express');
// var cookieParser = require('cookie-parser');
// var app = express()
//     .use(cookieParser())
//     .use(function(req, res) {
//         if (req.cookies.name) {
//             console.log('User name:', req.cookies.name);
//         } else {
//             res.cookie('name', 'foo');
//         }
//         res.end('Hello!');
//     })
//     .listen(3000);

// var express = require('express');
// var cookieParser = require('cookie-parser');
// var app = express()
//     .use(cookieParser())
//     .use('/toggle', function(req, res) {
//         if (req.cookies.name) {
//             res.clearCookie('name');
//             res.end('name cookie cleared! Was:' + req.cookies.name);
//         } else {
//             res.cookie('name', 'foo');
//             res.end('name cookie set!');
//         }
//     })
//     .listen(3000);


// var express = require('express');
// var cookieParser = require('cookie-parser');

// var app = express()
//     .use(cookieParser('my super secret sign key'))
//     .use('/toggle', function(req, res) {
//         if (req.signedCookies.name) {
//             res.clearCookie('name');
//             res.end('name cookie cleared! Was:' + req.signedCookies.name);
//         } else {
//             res.cookie('name', 'foo', { signed: true });
//             res.end('name cookie set!');
//         }
//     })
//     .listen(3000);

// express-session vs cookie-session

// var express = require('express'),
//     cookieParser = require('cookie-parser'),
//     session = require('cookie-session'),
//     express_sess = require('express-session'),
//     app = express();

// app.use(cookieParser())
// app.use(session({ keys: ['abc'], name: 'user' }));
// app.use(express_sess({ secret: 'abc', key: 'user'}));
// app.get('/', function(req, res, next) {
//     res.end(JSON.stringify(req.cookies));
//     console.log(req.session)
//     console.log(req.cookies)
// });

// app.listen(3000);



// Basically, express-session is more abstract, it supports different session
// stores (like files, DB, cache and whatnot).


// And cookie-session is a simple / lightweight cookie-based (cookie is the
// only storage engine supported: all the session info is stored on the
// client, in a cookie) session implementation. This kind of sessions is
// probably most famous for its Rails implementation.


// The basic difference between both these relates to how and where is the
// session data being stored. Cookie session is basically used for lightweight
// session applications where the session data is stored in a cookie but
// within the client [browser], whereas, Express Session stores just a mere
// session identifier within a cookie in the client end, whilst storing the
// session data entirely on the server. Cookie Session is helpful in
// applications where no database is used in the back-end. However, the
// session data cannot exceed the cookie size. On conditions where a database
// is used, it acts like a cache to stop frequent database lookups which is
// expensive.

// var express = require('express');
// var cookieSession = require('cookie-session');
// var app = express()
//     .use(cookieSession({
//         keys: ['my super secret sign key']
//     }))

// .use('/home', function(req, res) {
//         if (req.session.views) {
//             console.log(req.session);
//             req.session.views++;
//         } else {
//             req.session.views = 1;
//         }
//         res.end('Total views for you: ' + req.session.views);
//     })
//     .use('/reset', function(req, res) {
//         delete req.session.views;
//         res.end('Cleared all your views');
//     })
//     .listen(3000);

//compression

// var express = require('express');
// var compression = require('compression');
// var app = express()
//     .use(compression())
//     .use(express.static(__dirname + '/public'))
//     .listen(3000);


// var express = require('express');
// var timeout = require('connect-timeout');
// var app = express()
//     .use('/api', timeout(5000),
//         function(req, res, next) {
//             // simulate a hanging request by doing nothing
//         })
//     .listen(3000);

// var express = require('express');
// var timeout = require('connect-timeout');
// var app = express()
//     .use('/api', timeout(5000), function(req, res, next) {
//         // simulate a hanging request by doing nothing
//     }, function(error, req, res, next) {
//         if (req.timedout) {
//             res.statusCode = 500;
//             res.end('Request timed out');
//         } else {
//             next(error);
//         }
//     })
//     .listen(3000);


// var express = require('express');
// var timeout = require('connect-timeout');
// var app = express()
//     .use(timeout(5000))
//     .use(function(req, res, next) {
//         // simulate database action that takes 6s
//         setTimeout(function() {
//             next();
//         }, 6000)
//     })
//     .use(function(req, res, next) {
//         res.end('Done'); // ERROR request already terminated
//     })
//     .listen(3000);

// var express = require('express');
// var timeout = require('connect-timeout');
// var app = express()
//     .use(timeout(1000))
//     .use(function(req, res, next) {
//         // simulate database action that takes 2s
//         setTimeout(function() {
//             next();
//         }, 2000)
//     })
//     .use(haltOnTimedout)
//     .use(function(req, res, next) {
//         res.end('Done'); // Will never get called
//     })
//     .listen(3000);

// function haltOnTimedout(req, res, next) {
//     if (!req.timedout) next();
// }


// var express = require('express');
// express()
//     .use('/home', function(req, res, next) {
//         console.log('first:', req.url); // GET /home => "first: /"
//         next();
//     })
//     .use(function(req, res, next) {
//         console.log('second:', req.url); // GET /home => "second: /home"
//         next();
//     })
//     .listen(3000);


//REST Using Express

// var express = require('express');
// var app = express();
// app.all('/', function(req, res, next) {
//     res.write('all\n');
//     next();
// });
// app.get('/', function(req, res, next) {
//     res.end('get');
// });
// app.put('/', function(req, res, next) {
//     res.end('put');
// });
// app.post('/', function(req, res, next) {
//     res.end('post');
// });
// app.delete('/', function(req, res, next) {
//     res.end('delete');
// });
// app.listen(3000);


// var express = require('express');
// var app = express();
// app.route('/')
//     .all(function(req, res, next) {
//         res.write('all\n');
//         next();
//     })
//     .get(function(req, res, next) {
//         res.end('get');
//     })
//     .put(function(req, res, next) {
//         res.end('put');
//     })
//     .post(function(req, res, next) {
//         res.end('post');
//     })
//     .delete(function(req, res, next) {
//         res.end('delete');
//     });
// app.listen(3000);


// var express = require('express');
// var app = express();

// app.get('/', function(req, res) {
//     res.send('nothing passed in!');
// });

// app.get(/^\/[0-9]+$/, function(req, res) {
//     res.send('number!');
// });

// app.get('/*', function(req, res) {
//     res.send('not a number!');
// });

// app.listen(3000);


// var express = require('express');
// var app = express();
// app.get('/user/:userId', function(req, res) {
//     res.send('userId is: ' + req.params['userId']);
// });
// app.listen(3000);


// var express = require('express');
// var app = express();

// app.param('userId', function(req, res, next, userId) {
//     res.write('Looking up user: ' + userId + '\n');
//     // simulate a user lookup and
//     // load it into the request object for later middleware
//     req.user = { userId: userId };
//     next();
// });

// app.get('/user/:userId', function(req, res) {
//     res.end('user is: ' + JSON.stringify(req.user));
// });

// app.listen(3000);


// var express = require('express');
// var bodyParser = require('body-parser');

// // An in memory collection of items
// var items = [];

// // Create a router
// var router = express.Router();

// router.use(bodyParser());

// // Setup the collection routes
// router.route('/')
//     .get(function(req, res, next) {
//         res.send({
//             status: 'Items found',
//             items: items
//         });
//     })
//     .post(function(req, res, next) {
//         items.push(req.body);
//         res.send({
//             status: 'Item added',
//             itemId: items.length - 1
//         });
//     })
//     .put(function(req, res, next) {
//         items = req.body;
//         res.send({ status: 'Items replaced' });
//     })
//     .delete(function(req, res, next) {
//         items = [];
//         res.send({ status: 'Items cleared' });
//     });
// // Setup the item routes
// router.route('/:id')
//     .get(function(req, res, next) {
//         var id = req.params['id'];
//         if (id && items[Number(id)]) {
//             res.send({
//                 status: 'Item found',
//                 item: items[Number(id)]
//             });
//         } else {
//             res.send(404, { status: 'Not found' });
//         }
//     })
//     .all(function(req, res, next) {
//         res.send(501, { status: 'Not implemented' });
//     });
// // Use the router
// var app = express()
//     .use('/todo', router)
//     .listen(3000);


//Node with Mongodb
// var MongoClient = require('mongodb').MongoClient;
// var demoPerson = { name: 'John', lastName: 'Smith' };
// var findKey = { name: 'John' };

// MongoClient.connect('mongodb://127.0.0.1:27017/demo', function(err, db) {
//     if (err) throw err;
//     console.log('Successfully connected');

//     var collection = db.collection('people');

//     collection.insert(demoPerson, function(err, docs) {
//         console.log('Inserted', docs[0]);
//         console.log('ID:', demoPerson._id);

//         collection.find(findKey).toArray(function(err, results) {
//             console.log('Found results:', results);

//             collection.remove(findKey, function(err, results) {
//                 console.log('Deleted person');
//                 db.close();
//             });
//         });
//     });
// });

//Update a Document

// var MongoClient = require('mongodb').MongoClient;
// var demoPerson = { name: 'John', lastName: 'Smith' };
// var findKey = { name: 'John' };

// MongoClient.connect('mongodb://127.0.0.1:27017/demo', function(err, db) {
//     if (err) throw err;

//     var collection = db.collection('people');

//     collection.insert(demoPerson, function(err, docs) {
//         demoPerson.lastName = 'Martin';

//         collection.save(demoPerson, function(err) {
//             console.log('Updated');

//             collection.find(findKey).toArray(function(err, results) {
//                 console.log(results);

//                 // cleanup
//                 collection.drop(function() { db.close() });

//             });
//         });
//     });
// });

// Update Operators

// var MongoClient = require('mongodb').MongoClient;
// var website = {
//     url: 'http://www.google.com',
//     visits: 0
// };
// var findKey = {
//     url: 'http://www.google.com'
// };

// MongoClient.connect('mongodb://127.0.0.1:27017/demo', function(err, db) {
//     if (err) throw err;

//     var collection = db.collection('websites');

//     collection.insert(website, function(err, docs) {
//         var done = 0;

//         function onDone(err) {
//             done++;
//             if (done < 4) return;

//             collection.find(findKey).toArray(function(err, results) {
//                 console.log('Visits:', results[0].visits); // 4
//                 // cleanup
//                 collection.drop(function() { db.close() });
//             });
//         }

//         var incrementVisits = { '$inc': { 'visits': 1 } };

//         collection.update(findKey, incrementVisits, onDone);
//         collection.update(findKey, incrementVisits, onDone);
//         collection.update(findKey, incrementVisits, onDone);
//         collection.update(findKey, incrementVisits, onDone);

//     });
// });


//Moongoose

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/demo');
// var db = mongoose.connection;

// db.on('error', function(err) {
//     throw err });

// db.once('open', function callback() {
//     console.log('connected!');
//     db.close();
// });



// var mongoose = require('mongoose');

// // Define a schema
// var tankSchema = new mongoose.Schema(
//   {
//     name: 'string', 
//     size: 'string'
//   }
// );

// tankSchema.methods.print = function() { console.log('I am', this.name, 'the', this.size); };

// // Compile it into a model
// var Tank = mongoose.model('Tank', tankSchema);

// mongoose.connect('mongodb://127.0.0.1:27017/demo');
// var db = mongoose.connection;

// db.once('open', function callback() {
// console.log('connected!');

// // Use the model
//  var tony = new Tank({ name: 'tony', size: 'small' });
//  tony.print(); // I am tony the small

//  tony.save(function(err) {

//      Tank.findOne({ name: 'tony' }).exec(function(err, tank) {

//          // You get a model instance all setup and ready!
//          tank.print();
//          db.collection('tanks').drop(function() { db.close(); })
//      });
//    });
//  });


//Express-session with Mongodb
// var express = require('express');
// var expressSession = require('express-session');
// var MongoStore = require('connect-mongo')(expressSession);

// var sessionStore = new MongoStore({
//     host: '127.0.0.1',
//     port: '27017',
//     db: 'session',
//     url: 'mongodb://localhost:27017/demo'
// });

// var app = express()

//     .use(expressSession({
//         secret: 'my super secret sign key',
//         store: sessionStore
//     }))

//     .use('/home', function(req, res) {
//         if (req.session.views) {
//             req.session.views++;
//         } else {
//             req.session.views = 1;
//         }
//         res.end('Total views for you: ' + req.session.views);
//     })

//     .use('/reset', function(req, res) {
//         delete req.session.views;
//         res.end('Cleared all your views');
//     })

//     .listen(3000);  


// The in operator will tell you whether an object (or array) has a property name which matches a given string.

// var fantasyLit = {
//     tolkien: "The Lord of the Rings",
//     lewis: "The Chronicles of Narnia"
// };

// // Outputs: true
// console.log("tolkien" in fantasyLit);

// // Outputs: false
// console.log("asimov" in fantasyLit);

// //True
// console.log("constructor" in fantasyLit);



// function litList () {}

// litList.prototype.addToList = function (author, work) {
//     this[author] = work;
// };

// var fantasyLit = new litList();

// fantasyLit.addToList("tolkien", "The Lord of the Rings");

// // Outputs: true
// console.log("tolkien" in fantasyLit);

// // Outputs: false
// console.log("asimov" in fantasyLit);

// // Outputs: true
// console.log("addToList" in fantasyLit);


 // using in to detect whether an object possesses a given property can be a bit deceptive. Usually we only want to check for properties that belong to the object itself, not its prototype chain. Fortunately, JavaScript has a solution for that. It is called hasOwnProperty.

//  function litList () {}

// litList.prototype.addToList = function (author, work) {
//     this[author] = work;
// };

// var fantasyLit = new litList();

// fantasyLit.addToList("tolkien", "The Lord of the Rings");

// // Outputs: true
// console.log(fantasyLit.hasOwnProperty("tolkien"));

// // Outputs: false
// console.log(fantasyLit.hasOwnProperty("asimov"));

// // Outputs: false  
// console.log(fantasyLit.hasOwnProperty("addToList"));

// var summerMovies = [
//     "Iron Man 3",
//     "Star Trek: Into Darkness",
//     "Man of Steel"
// ];

// // Outputs: true
// var isMovie = summerMovies.hasOwnProperty("2");

// console.log(isMovie);

// Puts a "declared" property on the global object
// (window in browsers)

// var declared;

// // Outputs: true
// console.log("declared" in window);

// // Outputs: true
// console.log(window.hasOwnProperty("declared"));

// // Outputs: undefined
// console.log(declared);

// var obj = { myUndefined: undefined };

// // Outputs: true
// console.log("myUndefined" in obj);

// // Outputs: true
// console.log(obj.hasOwnProperty("myUndefined"));

// // Outputs: undefined
// console.log(obj.myUndefined);











