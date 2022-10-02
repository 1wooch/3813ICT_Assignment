const { group } = require('console');
var fs = require('fs');

module.exports=function(client,app){
    app.post('/addUserInChanel',function(req,res){
        console.log(req.body);

        const collection = client.collection('chanels');
        const test=collection.map(x=>x.user_list);
        console.log(test);

    })
}


// module.exports=function(req,res){

//     var username=req.body.username;
//     var chanelname=req.body.chanelname;

//    //console.log("input U"+username);
//    //console.log("input C"+chanelname);
//    var group_num=0;

//     //console.log(age,birthdate,email,username,role);
//     fs.readFile('./Data/chanels.json','utf8',function(error,data){
//             const obj=JSON.parse(data);
//             found=false
//             for (let i=0; i<obj.chanel.length; i++){
               
//                     if(chanelname==obj.chanel[i]['chanelname']){
//                         for (let j=0; j<obj.chanel[i]['user_list'].length; j++){
//                             if (obj.chanel[i]['user_list'][j]==username){
//                                 found=true
//                             }
//                         }
//                         if (found==true){
//                             res.send({"ok":false});
//                         }else if(found==false){
//                             obj.chanel[i]['user_list'].push(username);
//                             res.send({"ok":true});
//                         }
//                     }
//             }
//             //console.log(found);
//             //console.log(obj.chanel);
          
//             let objJson=JSON.stringify(obj);
//             fs.writeFile('./Data/chanels.json', objJson,'utf-8',function(err){
//                 if (err)throw err;
//             });
//     });
// }