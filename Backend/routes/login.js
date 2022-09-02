var fs = require('fs');

module.exports=function(req,res){
    //console.log("1")
    var u=req.body.username;
    var p=req.body.pwd;

    c=u+p;

    fs.readFile('./Data/users.json','utf8',function(error,data){
        if (error) return console.log(error);
        const userArray=JSON.parse(data);
        for(let i=0; i<userArray.users.length; i++){
            if (u==userArray.users[i]["email"]&&p==userArray.users[i]["pwd"]){
                    userdata={
                        username:userArray.users[i]["email"],
                        pwd:userArray.users[i]["pwd"],
                        birthdate:userArray.users[i]["birthdate"],
                        age:userArray.users[i]["age"],
                        role:userArray.users[i]["role"],
                        username:userArray.users[i]["username"]
                    }
                    //res.send({"ok":true});
                    res.send({"ok":true,
                    email:userArray.users[i]["email"],
                    pwd:userArray.users[i]["pwd"],
                    birthdate:userArray.users[i]["birthdate"],
                    age:userArray.users[i]["age"],
                    role:userArray.users[i]["role"],
                    username:userArray.users[i]["username"],
                    pwd:userArray.users[i]["pwd"],

                });
         
                    console.log("yeah");
                    return;
            }else{
                console.log("nope");
                //res.send({"ok":false});
                res.status({"ok":false});
                return;
            }
        }

 
    });
    
}