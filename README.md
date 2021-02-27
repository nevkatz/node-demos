## Node JS Demos

This is the repo I am using to try out new things with Node JS!

### What I have so far

Right now I have a simple server-client setup where I am trying various node functions with the file system - creating, deleting, listing, and writing files. 

### My primary aim 

My primary aim is to learn enough so that I can use it to build little desktop applications in node - accomplishing what I do with Powershell right now but with a friendly UI for non-coders. Eventually I might try using Electron, which uses node JS to build desktop applications, but for now, I want to focus on learning Node. 

### Notes on directory structure

The primary server file is index.js and it is the main test I am working on. There are other test files that can be tried with the format test-{number}-{description}.js

The files that are used for the client are in the public directory. I have a directory called old_tests that has a bunch of old files. To be candid, I am not really maintaining that now but maybe you can get a sense of things I've tried. 

For the most recent stuff, check out index.js, and public, and the test JS files.

### Output directories

There is an output directory for the simple tests outside the public directory. 

The main test should dynamically create an output directory in the public directory if it does not exist.

### Running the tests

* To run the tests or fire off the main server program, index.js, use the command line and go to the main repo directory. 
* stay at the top level of the directory or type "node <file>." 
* Then, open a web browser and go to http://127.0.0.1:3000 or http://localhost:3000 

### Dependencies

In addition to having node installed, make sure you have Socket IO and Express installed. 

### Work Cited

The server-client part of the primary demo is based on the tutorial from https://socket.io/get-started/chat

The favicon came from https://favicon.io/emoji-favicons/dragon-face/

The primary differences are some MIME type handling for the JS file and additional file-creation tests.

Deleting a file: https://stackoverflow.com/questions/5315138/node-js-remove-file


### Helpful sources

Background on websockets: https://stackabuse.com/node-js-websocket-examples-with-socket-io/




