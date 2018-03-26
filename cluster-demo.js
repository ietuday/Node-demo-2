// const cluster = require('cluster');
// const http = require('http');
// const numCPUs = require('os').cpus().length;

// if (cluster.isMaster) {
//   console.log(`Master ${process.pid} is running`);

//   // Fork workers.
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`worker ${worker.process.pid} died`);
//   });
// } else {
//   // Workers can share any TCP connection
//   // In this case it is an HTTP server
//   http.createServer((req, res) => {
//     res.writeHead(200);
//     res.end('hello world\n');
//   }).listen(8000);

//   console.log(`Worker ${process.pid} started`);
// }

// var cluster = require('cluster');
// var numCPUs = require('os').cpus().length;
// console.log("numCPUs:",numCPUs);
// if (cluster.isMaster) {
//   // Fork workers.
//   for (var i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//    Object.keys(cluster.workers).forEach(function(id) {
//     console.log("I am running with ID : "+cluster.workers[id].process.pid);
//   });

//   cluster.on('exit', function(worker, code, signal) {
//     console.log('worker ' + worker.process.pid + ' died');
//   });
// } else {

//       //Do further processing.
// }



var cluster = require('cluster');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {

  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', function(worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died');
  });
} else {

    //change this line to Your Node.js app entry point.
    require("./cluster-server.js");
}