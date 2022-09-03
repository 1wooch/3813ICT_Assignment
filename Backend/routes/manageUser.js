var fs = require ('fs');



module.exports=function(req,res){
    fs.readFile('./Data/users.json','utf8',function(error,data){
        if (error) return console.log(error);
        const userArray=JSON.parse(data);
        res.send({userArray});

    });
}