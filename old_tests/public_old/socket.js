var express = require('express');
var app = express();
var server = app.listen(3000);

app.use(express.static('./'));

console.log('running...');

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection',function(Socket) {

  console.log('new connection: ' + Socket.id);

  Socket.on('sendMessage',function(data) {

  	console.log('message received from client: ' + JSON.stringify(data));
  })

})
// npm install --save express
// npm install --save socket.io
// https://stackoverflow.com/questions/52580966/node-js-server-client-communication