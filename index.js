const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const fs = require('fs');
const express = require('express');
const xm = require("xmimetype");
/* 
// naive implementation

app.get('/',(req,res) => {
	res.send('<h2>Hello app</h1>');
});
*/

// this seems to make the difference.
// mention this in the video
app.use(express.static('public'));

app.get('/',(req,res) => {
	// added for mime
  res.set('Content-Type', 'text/html');
  res.sendFile(__dirname + '/public/index.html');
});

/*
app.get('/',(req,res) => {
	// added for mime
  res.set('Content-Type', 'text/javascript');
   res.sendFile(__dirname + '/public/js/socket-client.js');

});*/
/*
app.get('/',(req,res) => {
	// added for mime
  res.set('Content-Type', 'text/html');
  res.sendFile(__dirname + '/index.html');
});*/

//const path = '/js/socket.client.js';
//app.use('/public', express.static(path.join(__dirname, "public")));

io.on('connection',(socket) =>{
	console.log('a user connected...');

	socket.on('chat message', (msg) => {
		console.log('message: ' + msg);

		// file write logic
		// alternative: fs.appendFile
		fs.appendFile('public/messages.txt',msg + '\n',function(err){
			if (err) throw err;

			console.log('saved!');
		});
	})
})

http.listen(3000, () => {
  console.log('listening on *:3000');
});

/*
tutorial

https://socket.io/get-started/chat

Why it was useful 
What the hiccups are
*/