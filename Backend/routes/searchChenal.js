const { group } = require('console');
var fs = require ('fs');



module.exports=function(req,res){
    groupname=req.body.groupname;
    username=req.body.username;
    found=false;
    result=[];


    fs.readFile('./Data/chanels.json','utf8',function(error,data){

        if (error) return console.log(error);
        const userArray=JSON.parse(data);
        for (let i=0; i<userArray.chanel.length; i++){
            if (groupname==userArray.chanel[i]["groupname"]){
                console.log("find Group");
                for(let j=0; j<userArray.chanel[i]["user_list"].length; j++){
                    if(username==userArray.chanel[i]["user_list"][j]){
                        console.log("fund User");
                        found=true;
                        result.push(userArray.chanel[i]["chanelname"])

                    }
                }
            }
        }
        //console.log(result);

        if(found=true){
        console.log(result);
        
        res.send({ok:true,chanelList:result});
        }
        else{
            res.send({ok:false});

        }
    });
}