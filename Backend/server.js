const express = require('express');
const app=express();

var cors=require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use(express.static(__dirname+'')); //location of angular file 
console.log(__dirname);

const http = require('http').Server(app);
var server=http.listen(3000,function(){
    console.log("server Listening on port :3000");
})

app.post('/login',require('./routes/login'));
app.post('/loginafter',require('./routes/account'));
app.post('/manageUser',require('./routes/manageUser'));
app.post('/addUser',require('./routes/addUser'));
app.post('/deleteUser',require('./routes/deleteUser'));
app.post('/groupadminget',require('./routes/group-admin-get'));
app.post('/getGroupMember',require('./routes/getGroupMember'));
app.post('/deleteGroupMember',require('./routes/deletegroupmember'));
app.post('/addGroupMember',require('./routes/addgroupmember'));
app.post('/searchChenel',require('./routes/searchChenal'));
app.post('/deleteCenel',require('./routes/deleteChanel'));
app.post('/getChanel',require('./routes/getChanelList'));
app.post('/addUserInChanel',require('./routes/addUserInChanel'));
app.post('/makeUserAdmin',require('./routes/makeUserAdmin'));


