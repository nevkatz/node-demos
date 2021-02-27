const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const fs = require('fs');
const express = require('express');
//const xm = require("xmimetype");


// this seems to make the difference.
app.use(express.static('public'));

app.get('/',(req,res) => {
	// added for mime
//  res.set('Content-Type', 'text/html');
  res.sendFile(__dirname + '/public/index.html');
});
io.on('connection',(socket) =>{
	console.log('a user connected... ');
      let output_path = 'public/output';

      let delete_test = 'public/test.txt';

      // delete test
      if (fs.existsSync(delete_test)) {
      	    fs.unlink(delete_test,function(err){
            if(err) return console.log(err);
            console.log('file deleted successfully');
        });
      }
      else {
      	console.log('file to be removed does not exist');
      }
   

      // create output directory if it does not exist.
      if (!fs.existsSync(output_path)) {
      	// if it doesn't exist, create it.
         fs.mkdir(output_path, function(err) {
            if (err) {
             console.log('ERROR: ' + err)
          } else {
          console.log("New directory successfully created.")
          }
       });
     }
     else {
     	console.log('not creating the output directory because it already exists.');
    }
	socket.on('chat message', (msg) => {
		// prints to server
		console.log('message: ' + msg);

		// file write logic
		// alternative: fs.appendFile
		fs.appendFile('public/output/messages.txt',msg + '\n',function(err){
			if (err) throw err;

			console.log('saved!');
		});

         // list files
        fs.readdir(__dirname + '/public/output', (err, files) => {
         files.forEach(file => {
           console.log('filename: ' + file);
            socket.emit('file-list',{
            	message:'file: ' + file
            });
          });
         });
	})
});
// start the listening process
http.listen(3000, () => {
  // outputs to command line
  console.log('listening on *:3000');
});


// tutorial: https://socket.io/get-started/chat
