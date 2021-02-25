var express = require('express');
var events = require('events');
var http = require('http');
var app = express();
/*
app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Headers", "Content-Type");
        res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
        next();
 });*/
 /*
 app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", true);
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});*/

// this worked: curl "http://localhost:3000/socket.io/?EIO=4&transport=polling"


var server = app.listen(3000);

app.use(express.static('public'));

console.log('running...');

var socket = require('socket.io');

//var io = socket(server);
//var allowedOrigins = "http://localhost:* http://127.0.0.1:*";
//https://socket.io/docs/v3/handling-cors/
//var allowedOrigins = "*";

var io = socket(server, {
	cors:{
		origin:true,
        transports:['websocket','polling'],
		methods: ["GET", "PATCH", "POST", "PUT"],
		credentials:true,
		allowedHeaders: ["my-custom-header"],
		path:'/public'
	},
	reconnect:true
	/*handlePreflightRequest: (req, res) => {
        const headers = {
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Allow-Origin": req.headers.origin, //or the specific origin you want to give access to,
            "Access-Control-Allow-Credentials": true
        };
        res.writeHead(200, headers);
        res.end();
    }*/
});

 /*socket.on('sendMessage',function(data) {

  	console.log('message received from client: ' + JSON.stringify(data));
  })*/


io.on('connection',function(Socket) {

  console.log('new connection: ' + Socket.id);

    Socket.emit("hello", "world");

  Socket.on('sendMessage',function(data) {

  	  Socket.emit("hello", "world2");

  	console.log('message received from client: ' + JSON.stringify(data));
  })

})

// events logic

var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}
var hello = function () {
  console.log('I hear a scream!');
}


//Assign the event handler to an event:
eventEmitter.on('sendMessage', myEventHandler);

eventEmitter.emit('sendMessage');
// npm install --save express
// npm install --save socket.io
// https://stackoverflow.com/questions/52580966/node-js-server-client-communication


/*
other resources
https://stackoverflow.com/questions/24058157/socket-io-node-js-cross-origin-request-blocked

*/