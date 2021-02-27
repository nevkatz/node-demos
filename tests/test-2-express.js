
/*
 *  Basic Express Implementation.
 *  
 *  This does not use a separate client.
 */

// reads the express file and returns the export object, which we'll call app.
const app = require('express')();

// reads the http file and returns an object, which we'll call http.
const http = require('http');

// define the port over which the server-client communication will take place.
const port = 3000;

// creates a server out of the app object using the function given by HTTP.
const server = http.createServer(app);

// the express app 
app.get('/',(req,res) => {
	res.send('<h2>Hello world</h1>');
});

// app listens on port 3000 for connections.
server.listen(port, () => {
  // outputs to command line, which shows server messages.
  console.log('listening on http://localhost:'+port);
});

// express: https://expressjs.com/en/starter/hello-world.html

// background: 
/*
Express is a flexible mobile application framework that provides a robust set of features for web and mobile applications.

https://www.w3schools.com/nodejs/

*/