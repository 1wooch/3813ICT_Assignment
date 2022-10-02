var fs = require ('fs');



module.exports=function(client,app){
    app.post('/manageUser',function(req,res){
        const collection=client.collection('users');
        collection.find({}).toArray(function(err,result){ //->get all data
            if(err){
                res.send({ok:false});
            }
            //console.log(result);
            res.send(result);
            
        })
    })
}

// module.exports=function(req,res){
//     fs.readFile('./Data/users.json','utf8',function(error,data){
//         if (error) return console.log(error);
//         const userArray=JSON.parse(data);
//         res.send({userArray});

//     });
// }