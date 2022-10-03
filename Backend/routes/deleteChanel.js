var fs = require('fs');

//input: username and chanel name 
module.exports=function(client,app){
    app.post('/deleteChanel',function(req,res){
        
        username=req.body.username;
        chanelname=req.body.chanelname;
        console.log("deleteChanel.js0-----------------");
        console.log(username[1]);
        console.log(chanelname)
        const collection=client.collection('chanels');
        collection.update({chanelname:chanelname},{$pull:{user_list:username[1]}},function(err){
            if(err){
                console.log("something went wrong");
                res.send({ok:false});


            }else{
                console.log("deleed");
                res.send({ok:true});

            }
        }); 
    });
}


//
// module.exports=function(req,res){

//     var username=req.body.username;
//     var chenelname=req.body.chanelname;
//     //console.log(username,chenelname); //works

// fs.readFile('./Data/chanels.json','utf8',function(error,data){
//     const obj=JSON.parse(data);
//     //console.log(obj); //works
//     for(let i=0; i<obj.chanel.length; i++){
//         if(obj.chanel[i]["chanelname"]==chenelname){
//             for (let j=0; j<obj.chanel[i]["user_list"].length; j++){
//                 if(obj.chanel[i]["user_list"][j]==username){
//                     obj.chanel[i]["user_list"].splice(j,1);
//                     res.send({"ok":true});
//                     console.log(obj.chanel);
//                     break;

//                 }
//             }
//         }
//     }
//     let objJson=JSON.stringify(obj);
//     fs.writeFile('./Data/chanels.json', objJson,'utf-8',function(err){
//         if (err)throw err;
//     });
// });

    
// }