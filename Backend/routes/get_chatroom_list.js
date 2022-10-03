const { group } = require('console');
var fs = require ('fs');
//{username:this.username}
module.exports=function(client,app){
    app.post('/get_chatroom_list',function(req,res){
        username=req.body.username;
        chatroomlist=[];
        console.log(username);

        const collection=client.collection('chanels');
        collection.find({}).toArray(function(err,result){
            if(err){
                res.send({ok:false});
            }
            for(let i=0; i<result.length; i++){
                for(let j=0; j<result[i].user_list.length; j++){
                    if(result[i].user_list[j]==username){
                        chatroomlist.push(result[i]['chanelname']);
                        break;
                    }
            }
        }
        console.log(chatroomlist);
        res.send({chanelList:chatroomlist});
        
    })
    })
}

// module.exports=function(req,res){
//     username=req.body.username;
//     found=false;
//     result=[];


//     fs.readFile('./Data/chanels.json','utf8',function(error,data){

//         if (error) return console.log(error);
//         const userArray=JSON.parse(data);
//         for (let i=0; i<userArray.chanel.length; i++){
//             for(let j=0; j<userArray.chanel[i]["user_list"].length; j++){
//                 if(userArray.chanel[i]["user_list"][j]==username){
//                     console.log("fund User");
//                     found=true;
//                     result.push(userArray.chanel[i]["chanelname"]);
//                 }
//             }
//         }

//         if(found=true){
        
//         res.send({ok:true,chanelList:result});
//         }
//         else{
//             res.send({ok:false});

//         }
//     });
// }