var fs = require ('fs');

module.exports=function(client,app){
    app.post('/groupadminget',function(req,res){
        group_list=[];

        const collection=client.collection('group');
        collection.find({}).toArray(function(err,result){
            if(err){
                res.send({ok:false});
            }
            //console.log(result);
            for(let i=0; i<result.length; i++){
                //console.log(i,"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                //console.log(result[i]);
                for (let j =0; j<result[i].group_manager_list.length; j++){
                    if(result[i].group_manager_list[j]==req.body.username){
                        group_list.push(result[i].groupname);
                        console.log(result[i].groupname);
                        
                    }
                }
            }
            console.log(req.body.username);
            console.log(group_list);

            if(group_list.length>0){
                res.send({"ok":true,"group_list":group_list});

            }
            else{
                res.send({"ok":false})
            }
        })
    })
}


// module.exports=function(req,res){
//     var username=req.body.username;
//     var groupname;

//     fs.readFile('./Data/group.json','utf8',function(error,data){
//         if (error) return console.log(error);
//         const userArray=JSON.parse(data);
//         console.log("input user name: "+username);
//         var found=false;

//         for (let i=0; i<userArray.group.length; i++){
//             for (let j=0; i<userArray.group[i]['group_manager_list'].length; j++){
//                 if (username==userArray.group[i]['group_manager_list'][j]){
//                 //console.log("input user name"+username);
//                 //console.log("manager user name"+userArray.gorup[i]['group_manager_list']);
//                 //result=userArray.group[i];
            
//                 console.log(userArray.group[i]['group_manager_list'][j]);
//                 groupname=userArray.group[i]['groupname'];
//                 //console.log("test1");
//                 var found=true;

//                 break;

//             }}
//         }
//         if (found==true){
//             res.send({"ok":true,"groupname":groupname});
//         }else{
//             console.log("404 no group member found");
//             res.send({"ok":false});

//         }
//     });
// }