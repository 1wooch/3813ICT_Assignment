const { group } = require('console');
var fs = require ('fs');

module.exports=function(client,app){
    app.post('/addgroupmember',function(req,res){
        username=req.body.username;
        //console.log('addgroupmember.js username',username);
        groupname=req.body.groupname;
        //console.log('addgroupmember.js groupname',groupname);

        const collection=client.collection('group');
        collection.update({groupname:groupname[0]},{$push:{user_list:username}},function(err){
            if(err){
                console.log("add user in chanel error");
                res.send({ok:false});

            }else{
                res.send({ok:true});
                console.log("add user in chanel succeed");
                
            }
        })
    });
}

// module.exports=function(req,res){

//     var username=req.body.username;
//     var groupname=req.body.groupname;

//    //console.log(username);
//    //console.log(groupname);
//    var group_num=0;

//     //console.log(age,birthdate,email,username,role);
//     fs.readFile('./Data/group.json','utf8',function(error,data){
//             const obj=JSON.parse(data);
//             found=false
//             for (let i=0; i<obj.group.length; i++){
//                 for (let j=0; j<obj.group[i]["user_list"].length;j++){
//                     if(username==obj.group[i]['user_list'][j]){
//                         found=true;       
//                         //console.log("roop1: "+obj.group[i]['user_list'][j]);
//                         break;
//                     }

//                 }
//             }
//             for (let i=0; i<obj.group.length; i++){
//                     if(groupname==obj.group[i]['groupname']){
//                         group_num=i;
//                         break;
//                     }
//             }
//             //console.log(group_num);
//             if(found==false){
//                 obj.group[group_num]["user_list"].push(username);
//                 res.send({"ok":true});
//             }
//             else if(found==true){
//                 res.send({"ok":false});
//             }
//             let objJson=JSON.stringify(obj);
//             fs.writeFile('./Data/group.json', objJson,'utf-8',function(err){
//                 if (err)throw err;
//             });
//     });
// }