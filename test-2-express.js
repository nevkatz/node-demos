
/*
 *  Basic Express Implementation.
 *  
 *  This does not use a separate client.
 */

const app = require('express')();
const http = require('http').createServer(app);


// naive implementation
app.get('/',(req,res) => {
	res.send('<h2>Hello app</h1>');
});

// start listening...
http.listen(3000, () => {
  // outputs to command line
  console.log('listening on *:3000');
});
