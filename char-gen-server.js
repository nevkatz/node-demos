const express = require('express');

// get the express object
const app = express();

// create a server
const http = require('http').createServer(app);

// get a socket object
const io = require('socket.io')(http);

// get a file system object
const fs = require('fs');

//const xm = require("xmimetype");

// this seems to make the difference.
app.use(express.static('public'));

app.get('/',(req,res) => {
	// added for mime
//  res.set('Content-Type', 'text/html');
  res.sendFile(__dirname + '/public/char-gen.html');
});
io.on('connection',(socket) =>{
      list_files(socket, fs);

      let output_path = 'public/output';

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

   // save character logic
	 socket.on('save character', (obj) => {
  	// prints message to server
		console.log('saving character: ' + obj.name);

    let str = JSON.stringify(obj);
		 // file write logic
		 fs.writeFile('public/output/'+obj.filename, str,function(err){
		  	if (err) throw err;
		  	console.log('saved!');
		 });

    // update list of files every time we save a character.
      list_files(socket, fs);
	 });
});
function list_files(socket, fs) {
   fs.readdir(__dirname + '/public/output', (err, files) => {
         let filenames = [];
         files.forEach(filename => {
              // push each filename
              filenames.push(filename);
          }); // end for each

          socket.emit('file-list',{
              // push each filename
                 filenames:filenames
          }); // end emit
    }); // end the the list files function...

}
// start the listening process
http.listen(3000, () => {
  // outputs to command line
  console.log('listening on *:3000');
});


// tutorial: https://socket.io/get-started/chat
