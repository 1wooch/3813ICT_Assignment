var fs = require('fs');


module.exports=function(client,app){
    app.post('/deleteUser',function(req,res){
        console.log(req.body);

        const collection=client.collection('users');
        collection.deleteOne({"username":req.body.username},function(err){
            if(err){
                console.log("something went wrong to delete");
                res.send({ok:false});
            }
            else{
                res.send({ok:true});
            }
        });

    })
}
// module.exports=function(req,res){

//     var username=req.body.username;

//     var inputdata={
//         "username":username,

//     }
// //    console.log(username);//works
// fs.readFile('./Data/users.json','utf8',function(error,data){
//     const obj=JSON.parse(data);
//     found=false
//     for (let i=0; i<obj.users.length; i++){
//         if(username==obj.users[i]['username']){
//             obj.users.splice(i,1);
//             res.send({"ok":true});
//             console.log(obj);
//             found=true;
//             break;
//         }
//     }
//     if (found==false){
//         res.send({"ok":false});
//     }
//     let objJson=JSON.stringify(obj);
//     fs.writeFile('./Data/users.json', objJson,'utf-8',function(err){
//         if (err)throw err;
//     });
// });
    
// }