module.exports={
    connect:function(io,PORT){
        io.on('connection',(socket)=>{
            console.log('user connection on port '+PORT+' : '+socket.id);
            socket.on('message',(message)=>{
                io.emit('message',message);
                console.log('socket.js message:',message);


            })
            socket.on('username',(username)=>{
                io.emit('username',username)
                console.log('socket.js username:',username);

            })
        });
    }
}