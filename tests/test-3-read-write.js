/*
 *  Test of reading and writing files.
 *
 *  Reads from test-files/test-3-read-write.html
 *
 *  Writes to output.txt
 */

var http = require('http');
var fs = require('fs');

let port = 3000;
let host = 'http://127.0.0.1';

let server = http.createServer(function(req,res){

	fs.readFile('test-files/test-3-read-write.html',function(err,data){

		res.writeHead(200,
			{'Content-Type':'text/html'}
		);

		res.write(data);

		return res.end();
	});
});

server.listen(port);

let filename = 'output/test-3-output.txt';
let content = 'Hello world!';

fs.writeFile(filename, content, function (err){
	if (err) { throw err; }
	console.log('file saved!');
});

console.log('Server running at '+host+':'+port+'/');