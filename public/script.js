var socket;

const io = require("socket.io-client");

socket = io.connect('ws://localhost:3000',{

	withCredentials:true,
	transports:['websocket','polling'],
	extraHeaders: {
      "my-custom-header": "abcd"
    }
});

var button = document.getElementById('button');

button.addEventListener('click',function(){
	var data = {
		'X-Content-Type':'text/html'
	};

	socket.emit('sendMessage',data);
});



// https://socket.io/docs/v3/handling-cors/
