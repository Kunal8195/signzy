'use strict'

/* 3rd Party */
const socketio = require('socket.io-client');

// establishing connection with server
const socket = socketio.connect('http://localhost:3000')

// user name and a flag varaible
let onetime = 1;
let name;
let message;

// Listening for connection
socket.on('connect', function(){
	console.log('Enter your name');
})

socket.on('disconnect', function(){
	console.log('lost connection');
})

// emitting group message event with concatinating user name
socket.emit('group message',message+'@'+name);

// listening for messages coming from different users
socket.on('group message',function(msg){

    // splitting for output like this
    // Kunal:I am doing great
	console.log(msg.split('@')[1] + ':' + msg.split('@')[0]);
})


const stdin = process.openStdin();

// listening for input on terminal
stdin.addListener("data", function(d) {
 
    // this condition will get true only one time
    // for entering the name
    // after that it takes the input as messages
    if(onetime){
    	onetime = 0;
        name = d.toString().trim()
        console.log('Hi! Start typing messages')
    } else {
    	console.log("you: " + d.toString().trim());
        message = d.toString().trim()

    }

});