/* inside public directory */

// instantiate global socket variable
var socket = io();

var form = document.getElementById('form');
var input = document.getElementById('input');
let messages = document.getElementById('messages')

form.addEventListener('submit',function(e){

  // prevent default function in form event
  e.preventDefault();
  if (input.value) {
      console.log('message sent...');
      socket.emit('chat message',input.value);
    
      console.log('chat message sent!');
      var item = document.createElement('li');
      item.textContent = input.value;
      messages.appendChild(item);

      window.scrollTo(0,document.body.scrollHeight);
      input.value = '';

    } // endif
}); // end submit listener

// print out files...
socket.on('file-list',function(data){
  console.log(data.message);
});

    
// tutorial: https://socket.io/get-started/chat