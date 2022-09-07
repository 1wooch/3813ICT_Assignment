var fs = require ('fs');



module.exports=function(req,res){
    var groupname=req.body.groupname;
    var result=[];
    found=false;

    //console.log(groupname+"test1")
    fs.readFile('./Data/chanels.json','utf8',function(error,data){
        if (error) return console.log(error);
        const userArray=JSON.parse(data);
        var found=false;
        for (let i=0; i<userArray.chanel.length; i++){
            if(userArray.chanel[i]["groupname"]==groupname){
                result.push(userArray.chanel[i]["chanelname"]);
                console.log(result);

            }
        }
        if (result.length>0){
            
            res.send({"ok":true,result:result});
        }else{
            res.send({"ok":false});

        }
        console.log("??"+result);
    });
}