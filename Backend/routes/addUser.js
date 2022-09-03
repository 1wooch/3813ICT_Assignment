var fs = require('fs');

module.exports=function(req,res){
    var age=req.body.age;
    var birthdate=req.body.birthdate;
    var email=req.body.email;
    var username=req.body.username;
    var role=req.body.role;
    var pwd=req.body.pwd;

    var inputdata={
        "username":username,
        "pwd":pwd,
        "email":email,
        "age":age,
        "birthdate":birthdate,
        "role":role
    }
    //console.log(age,birthdate,email,username,role);
    fs.readFile('./Data/users.json','utf8',function(error,data){
            const obj=JSON.parse(data);
            found=false
            for (let i=0; i<obj.users.length; i++){
                if(username==obj.users[i]['username']){
                    found=true;      
   
                    break;
                }
            }
            if(found==false){
                obj.users.push(inputdata);
                res.send({"ok":true});
            }
            else if(found==true){

                res.send({"ok":false});
            }
            let objJson=JSON.stringify(obj);
            fs.writeFile('./Data/users.json', objJson,'utf-8',function(err){
                if (err)throw err;
            });
    });
}