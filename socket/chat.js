'use strict'

module.exports = function(io){

// Listening for connection with sockets
io.on('connection',function(socket){                      
        
        // Listening for event of group message
        socket.on('group message',function(msg){            
            io.emit('group message',msg);
        });
        
    });
}



