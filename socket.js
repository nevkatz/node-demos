var express = require('express');
var events = require('events');
var http = require('http');
var app = express();


// this worked: curl "http://localhost:3000/socket.io/?EIO=4&transport=polling"


var server = app.listen(3000);

app.use(express.static('public'));

console.log('running...');

var socket = require('socket.io');

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


});

// no result
io.use((socket, next) => {
  if (isValid(socket.request)) {
    next();
  } else {
    next(new Error("invalid"));
  }
});

 io.on('sendMessage',function(data) {

  	console.log('message received from client: ' + JSON.stringify(data));
  })


io.on('connection',function(Socket) {

  console.log('new connection: ' + Socket.id);

    Socket.emit("hello", "world");

  Socket.on('sendMessage',function(data) {

  	  Socket.emit("hello", "world2");

  	console.log('message received from client: ' + JSON.stringify(data));
  })

});
// no result...
io.on("connect_error", (err) => {
  console.log(err instanceof Error); // true
  console.log(err.message); // not authorized
  console.log(err.data); // { content: "Please retry later" }
});

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