const { group } = require('console');
var fs = require ('fs');

module.exports=function(client,app){
    app.post('/searchChenal',function(req,res){
        username=req.body.username;
        groupname=req.body.groupname;
        //console.log(username);
        //console.log(groupname);
        text_sender=[];

        const collection=client.collection('chanels');
        collection.find({groupname:groupname}).toArray(function(err,result){
            if(err){
                res.send({ok:false});
            }
                for(let i=0; i<result.length; i++){
                    for(let j=0; j<result[i].user_list.length; j++){
                        //console.log(result[i].user_list[j]);
                        if(result[i].user_list[j]==username){
                            text_sender.push(result[i]['chanelname']);
                            break;
                        }

                    }
                }
                console.log(text_sender);

                res.send({chanelList:text_sender});

        })

    })
}

// module.exports=function(req,res){
//     groupname=req.body.groupname;
//     username=req.body.username;
//     found=false;
//     result=[];


//     fs.readFile('./Data/chanels.json','utf8',function(error,data){

//         if (error) return console.log(error);
//         const userArray=JSON.parse(data);
//         for (let i=0; i<userArray.chanel.length; i++){
//             if (groupname==userArray.chanel[i]["groupname"]){
//                 console.log("find Group");
//                 for(let j=0; j<userArray.chanel[i]["user_list"].length; j++){
//                     if(username==userArray.chanel[i]["user_list"][j]){
//                         console.log("fund User");
//                         found=true;
//                         result.push(userArray.chanel[i]["chanelname"])

//                     }
//                 }
//             }
//         }
//         //console.log(result);

//         if(found=true){
//         console.log(result);
        
//         res.send({ok:true,chanelList:result});
//         }
//         else{
//             res.send({ok:false});

//         }
//     });
// }