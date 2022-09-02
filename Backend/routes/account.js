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
    console.log(age,birthdate,email,username,role);
    fs.readFile('./Data/users.json','utf8',function(error,data){
            const obj=JSON.parse(data);
            found=false
            for (let i=0; i<obj.users.length; i++){
                if(email==obj.users[i]['email']){
                    obj.users[i]=inputdata;
                    found=true;         
                    break;
                }
            }
            if(found==false){
                obj.users.push(inputdata);
            }
            res.send(obj);
            let objJson=JSON.stringify(obj);
            console.log("2"+objJson);
            fs.writeFile('./Data/users.json', objJson,'utf-8',function(err){
                if (err)throw err;
            });
    });
}