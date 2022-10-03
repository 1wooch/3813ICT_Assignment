const express = require('express');
const app=express();
const socketio=require ('socket.io');
const http = require('http').Server(app);
const bodyParser = require('body-parser');
var cors=require('cors');



const io = require('socket.io')(http,{
    cors:{
        origin:"http://localhost:4200",
        methods:["GET","POST"],
    }
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(__dirname+'')); //location of angular file 

// var server=http.listen(3000,function(){
//     console.log("server Listening on port :3000");
// })
//---------------chat---------------------------------
const PORT=3000;

const sockets=require('./socket.js');
const server = require('./listen.js');
app.use(cors());

sockets.connect(io,PORT);
server.listen(http,PORT);
//-------------------chat----------------------------

//========================mongo------------------------------------------
var MongoClient = require('mongodb').MongoClient;
var url =  "mongodb+srv://onechoo1106:abc1234@mydb.swwyly1.mongodb.net/?retryWrites=true&w=majority";

var mongodb = require('mongodb');
var ObjectID = mongodb.ObjectId;
MongoClient.connect(url, {
    useNewUrlParser: true
}, function(err, client) {
    if(err){return console.log(err)}
        const dbname='3813db';
        const db = client.db(dbname);
        console.log("connected to mongo");
        
        require('./routes/login.js')(db,app);
        // require('./routes/account.js')(db,app); //same as add user
        require('./routes/addUser.js')(db,app); //+edit
        require('./routes/addUserInChanel.js')(db,app);
        require('./routes/addgroupmember.js')(db,app);
        // require('./routes/checkGroupAdmin.js')(db,app); // useless
        require('./routes/deleteChanel')(db,app);
        require('./routes/deleteGroupAdmin.js')(db,app);
        require('./routes/deleteUser.js')(db,app);
        require('./routes/deletegroupmember.js')(db,app);
        require('./routes/getChanelList.js')(db,app);
        require('./routes/getGroupMember.js')(db,app);
        require('./routes/get_chatroom_list.js')(db,app);
        require('./routes/groupadminget.js')(db,app);
        require('./routes/makeUserAdmin.js')(db,app);
        require('./routes/manageUser.js')(db,app);
        require('./routes/searchChenal.js')(db,app);


        //require('./routes/api-add.js')(db,app);
        
        //require('./listen.js').listen(http,3000);
        
})
//---------------------------------------------------------------
// app.post('/login',require('./routes/login'));
// app.post('/loginafter',require('./routes/account'));
// app.post('/manageUser',require('./routes/manageUser'));
// app.post('/addUser',require('./routes/addUser'));
// app.post('/deleteUser',require('./routes/deleteUser'));
// app.post('/groupadminget',require('./routes/group-admin-get'));
// app.post('/getGroupMember',require('./routes/getGroupMember'));
// app.post('/deleteGroupMember',require('./routes/deletegroupmember'));
// app.post('/addGroupMember',require('./routes/addgroupmember'));
// app.post('/searchChenel',require('./routes/searchChenal'));
// app.post('/deleteCenel',require('./routes/deleteChanel'));
// app.post('/getChanel',require('./routes/getChanelList'));
// app.post('/addUserInChanel',require('./routes/addUserInChanel'));
// app.post('/makeUserAdmin',require('./routes/makeUserAdmin'));
// app.post('/checkGroupAdmin',require('./routes/checkGroupAdmin'));
// app.post('/deleteGroupAdmin',require('./routes/deleteGroupAdmin'));
// app.post('/get_chatroom_list',require('./routes/get_chatroom_list'));



//app.post('/test',require('./routes/test'));


// app.get('/test', (req, res) => {
//     const collection = client.db('mydb').collection('test');
//      collection.insertOne(
//       {
//         username: "Hi",
//         password: "Super secure",
//         email: "hi2",
//       }
//     );
// });


//Doom of MONGO
//---------------------------------------------------------------------------------------------------
// const url='mongodb+srv://onechoo1106:abc1234@mydb.swwyly1.mongodb.net/?retryWrites=true&w=majority';
// mongoose.connect(url,function(err){
//     if(err)throw err;
//     const dbName='mydb';

//     let db = mongoose.connection.dbName;
//     const result = await db.collection('test').find().toArray();


// })



// const url='mongodb://localhost:27017';
// MongoClient.connect(url,{maxPoolSize:10,useNewUrlParser:true,useUnifiedTopology:true},function(err,client){
//     if(err){return console.log(err)}
//         const dbName='mydb';
//         const db = client.db(dbName);
//         require('./routes/test.js')(app,client);

// })