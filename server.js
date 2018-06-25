/* 3rd Party */
const express = require('express');



// Express App
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);


// Root Route
app.get('/', (req, res) => {
	res.send('Welcome! The App is runnning fine');
})


// Mount the Routes
require("./socket")(io);


// start the Server
http.listen(3000, function(){
  console.log('listening on http://localhost:3000');
});


module.exports = {
	io
}