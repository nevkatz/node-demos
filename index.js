const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

/* 
// naive implementation

app.get('/',(req,res) => {
	res.send('<h2>Hello app</h1>');
});
*/

app.get('/',(req,res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection',(socket) =>{
	console.log('a user connected...');
})

http.listen(3000, () => {
  console.log('listening on *:3000');
});

/*
tutorial

https://socket.io/get-started/chat

Why it was useful 
What the hiccups are
*/