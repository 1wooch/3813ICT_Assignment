


module.exports={
    connect:function(io,PORT){
        io.on('connection',(socket)=>{
            console.log('user connection on port '+PORT+' : '+socket.id);
            socket.on('message',(message,chanelname)=>{
                io.to(chanelname).emit('message',message);
                //console.log(chanelname); //working
            })
            socket.on('username',(username,chanelname)=>{
                io.to(chanelname).emit('username',username);
                //console.log(chanelname) //working
            })
            socket.on('join',(chanelname)=>{
                socket.join(chanelname);
                // ,function(){
                console.log("join",chanelname);

                // });

                //console.log(chanelname) //working
            })
        });
    }
}