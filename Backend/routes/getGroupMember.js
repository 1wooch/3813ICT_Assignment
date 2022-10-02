var fs = require ('fs');

module.exports=function(client,app){
    
    app.post('/getGroupMember',function(req,res){
        const group_member_list=[];
        const group_admin_list=[];
        const collection = client.collection('group');
        collection.find({}).toArray(function(err,result){
            if(err){
                res.send({ok:false});
            }
            for(let i=0; i<req.body.group_list.length; i++){
                for (let j=0; j<result.length; j++){
                    if(result[j].groupname==req.body.group_list[i]){
                        for (let x =0; x<result[j].user_list.length; x++){
                        group_member_list.push([req.body.group_list[i],result[j].user_list[x]]);
                        }
                        //group_member_list.push([req.body.group_list[i],result[j].user_list]);
                        group_admin_list.push([req.body.group_list[i],result[j].group_manager_list]);

                    }
                }
            }
            console.log(group_member_list);
            console.log(group_admin_list);

            if(group_member_list.length<1){
                res.send({ok:false});
            }else{
                res.send({ok:true,"group_member_list":group_member_list,"group_admin_list":group_admin_list});

            }
        })
    })
}

// module.exports=function(req,res){
//     var groupname=req.body.groupname;


//     fs.readFile('./Data/group.json','utf8',function(error,data){
//         if (error) return console.log(error);
//         const userArray=JSON.parse(data);
//         var found=false;
//         //console.log("groupname"+groupname);
//         for (let i=0; i<userArray.group.length; i++){
//             if (groupname==userArray.group[i]['groupname']){
//                 res.send({"ok":true,
//                 groupname:userArray.group[i]["groupname"],
//                 userlist:userArray.group[i]["user_list"],
//                 managerlist:userArray.group[i]["group_manager_list"],
//                 chanels:userArray.group[i]["chanels"],

//             });
//                 found=true;
//                 break;
//             }
//         }
//         if (found==true){
//              //res.send({"ok":true,"groupname":groupname});
//              console.log("send group member");

//          }else{
//              console.log("404 not find group member");
//              //res.send({"ok":false});
//          }
//     });
// }