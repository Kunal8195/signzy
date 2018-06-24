'use strict'

module.exports = function(io){

// Listening for connection with sockets
io.on('connection',function(socket){
        
        // some variables
        let name=null;
		let users={};
		let keys={};

        users[name]=socket.id;
        keys[socket.id]=name;              
        
        // Listening for event of group message
        socket.on('group message',function(msg){
            console.log(msg);
            io.emit('group',msg);
        });
        
        // listening for connection break
        socket.on('disconnect', function(){
            delete users[keys[socket.id]];
            delete keys[socket.id];
            io.emit('users',users);
            console.log(users);
        });
    });
}



