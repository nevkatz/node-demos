
/*
 *  Hello World Test. 
 *  
 *  This does not use a separate client.
 *
 *  Adapted from 
 *  https://www.tutorialspoint.com/nodejs/nodejs_first_application.htm
 *
 */
const http = require('http');

let server = http.createServer(function(request,response){

	response.writeHead(200,{'Content-Type':'text/html'});

	response.end('<h2>Hello world</h2>');
});


server.listen(3000, () => {
  // outputs to command line
  console.log('listening on *:3000');
});

