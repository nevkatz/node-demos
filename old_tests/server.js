
// to use features of the http protocol. // 
var http = require('http');

// initialize to empty string. //
var req = "";



http.createServer(function(req, res) {
    if (req.method == 'GET') {
    	console.log('get!');
    } else if (req.method == 'POST') {
        var body = '';
        req.on('data', function(data) {
            body += data;
        });
        req.on('end', function() {
         console.log("We have received your request successfully.");
        });
    }
    res.end("ok");
})