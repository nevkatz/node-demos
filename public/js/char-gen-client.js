
/*
Client-Server conversation
The client
*/

// instantiate the global socket.
var socket = io();

// grab the form element so we can listen for submit.
let form = document.getElementById('char-form');

// define inputs
let filename_input = document.getElementById('filename');
let name_input = document.getElementById('char-name');
let pers_input = document.getElementById('char-personality');
let age_input = document.getElementById('char-age');

let files = document.getElementById('file-list')

// listen for submit.
form.addEventListener('submit',function(e){

 // get the name.
 let name = name_input.value;
 let personality = pers_input.value;
 let age = age_input.value;
 let filename = filename_input.value;
 
  // prevent default function in form event
  e.preventDefault();

    // create JSON object.
  	 let obj = {
  	 	filename:filename,
  	 	name:name,
  	 	age:age,
  	 	personality:personality
  	 }; 

  	  // send the object to the server
      socket.emit('save character',obj);
      
      // print to client console.
      console.log('character save attempted.');

}); // end submit listener

// print out files.
// we receive an updated list of files every time a character is saved.
socket.on('file-list',function(data){
  // get the list DOM element.
  let list = document.getElementById('file-list');

  // translate array into HTML
  let items = data.filenames.map(x => `<li>${x}</li>`).join('');

  // set the HTML
  list.innerHTML = items;
});

    