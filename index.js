const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const fs = require('fs');
const express = require('express');



//const xm = require("xmimetype");
/* 
// naive implementation

app.get('/',(req,res) => {
	res.send('<h2>Hello app</h1>');
});
*/

// this seems to make the difference.
app.use(express.static('public'));

app.get('/',(req,res) => {
	// added for mime
//  res.set('Content-Type', 'text/html');
  res.sendFile(__dirname + '/public/index.html');
});
io.on('connection',(socket) =>{
	console.log('a user connected... ');
      let path = 'public/output';

      let d_test = 'public/test.txt';

      // delete test
      if (fs.existsSync(d_test)) {
      	    fs.unlink(d_test,function(err){
            if(err) return console.log(err);
            console.log('file deleted successfully');
        });
      }
      else {
      	console.log('file to be removed does not exist');
      }
   

      // check for a directory
      if (!fs.existsSync(path)) {
      	// if it doesn't exist, create it.
         fs.mkdir(path, function(err) {
            if (err) {
             console.log('ERROR: ' + err)
          } else {
          console.log("New directory successfully created.")
          }
       });
     }
     else {
     	console.log('file exists.....');
    }
	socket.on('chat message', (msg) => {
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
          });
         });
	})
})
http.listen(3000, () => {
  console.log('listening on *:3000');
});


// tutorial: https://socket.io/get-started/chat
