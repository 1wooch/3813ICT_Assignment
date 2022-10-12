


module.exports={
    connect:function(io,PORT){
        io.on('connection',(socket)=>{ //connect to socket room
            console.log('user connection on port '+PORT+' : '+socket.id);// geet a message whenever user enter chat
            socket.on('message',(message,chanelname)=>{
                io.to(chanelname).emit('message',message);
                //console.log(chanelname); //working
            })
            socket.on('username',(username,chanelname)=>{ // geet a user name whenever user enter chat
                io.to(chanelname).emit('username',username);
                
                //console.log(chanelname) //working
            })
            socket.on('userprofile',(userprofile,chanelname)=>{ // geet a user profile picture whenever user enter chat
                io.to(chanelname).emit('userprofile',userprofile);
                
                console.log('working?')
                console.log(userprofile);
                console.log('working? finish')
            })
            socket.on('join',(chanelname)=>{ //join to Chanel Name
                socket.join(chanelname);
                //console.log("join",chanelname);
            })
            socket.on('image',(chanelname,file)=>{ // get chanel name and sent image
                io.to(chanelname).emit('image',file);
                console.log('image is working');

            })
        });
    }
}