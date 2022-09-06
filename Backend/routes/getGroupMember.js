var fs = require ('fs');



module.exports=function(req,res){
    var groupname=req.body.groupname;


    fs.readFile('./Data/group.json','utf8',function(error,data){
        if (error) return console.log(error);
        const userArray=JSON.parse(data);
        var found=false;
        console.log("groupname"+groupname);
        for (let i=0; i<userArray.group.length; i++){
            if (groupname==userArray.group[i]['groupname']){
                res.send({"ok":true,
                groupname:userArray.group[i]["groupname"],
                userlist:userArray.group[i]["user_list"],
                managerlist:userArray.group[i]["group_manager_list"],
                chanels:userArray.group[i]["chanels"],

            });
                found=true;
                break;
            }
        }
        if (found==true){
             //res.send({"ok":true,"groupname":groupname});
             console.log("send group member");

         }else{
             console.log("404 not find group member");
             //res.send({"ok":false});
         }
    });
}