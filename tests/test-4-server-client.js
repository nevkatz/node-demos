const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const express = require('express');

// this seems to make the difference.
app.use(express.static('public'));

app.get('/',(req,res) => {

  res.sendFile(__dirname + '/public/test-4-server-client.html');
});
io.on('connection',(socket) => {
	console.log('a user connected... ');
      // create output directory if it does not exist.
      
	  socket.on('chat message', (msg) => {
		// prints to server
		console.log('message: ' + msg);

	})
});
// start the listening process
http.listen(3000, () => {
  // outputs to command line
  console.log('listening on *:3000');
});


// tutorial: https://socket.io/get-started/chat
