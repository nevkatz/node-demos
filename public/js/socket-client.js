/* inside public directory */

 var socket = io();

    var form = document.getElementById('form');
    var input = document.getElementById('input');
    let messages = document.getElementById('messages')

    form.addEventListener('submit',function(e){
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
      }
    });