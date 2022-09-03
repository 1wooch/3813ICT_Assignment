var fs = require('fs');

module.exports=function(req,res){
    //console.log("1")
    var u=req.body.username;
    var p=req.body.pwd;

    console.log("username"+u);
    console.log("Input Password"+p);
    login_success=false
    fs.readFile('./Data/users.json','utf8',function(error,data){
        if (error) return console.log(error);
        const userArray=JSON.parse(data);
        console.log("user array length"+userArray.users.length);

        for(let i=0; i<userArray.users.length; i++){
            console.log("Array Email"+userArray.users[i]["email"]);
            console.log("Array Password"+userArray.users[i]["pwd"]);
            if (u==userArray.users[i]["email"]&&p==userArray.users[i]["pwd"]){
                this.login_success=true;
                console.log("yeah");

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
                pwd:userArray.users[i]["pwd"]
            });
            break
            }
        }
        console.log(this.login_success);
        if(this.login_success==false){
            console.log("nope");
            //res.send({"ok":false});
            res.send({"ok":false});
        }else if(this.login_success==true){
            console.log("yes");
        }

 
    });
    
}