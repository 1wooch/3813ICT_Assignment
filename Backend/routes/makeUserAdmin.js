const { group } = require('console');
var fs = require('fs');

module.exports=function(req,res){

    var username=req.body.username;
    var groupname=req.body.groupname;
    var found_group=0;
    

    //console.log(age,birthdate,email,username,role);
    fs.readFile('./Data/group.json','utf8',function(error,data){
            const obj=JSON.parse(data);
            found=false
            for (let i=0; i<obj.group.length; i++){
               
                    if(groupname==obj.group[i]['groupname']){
                        found_group=i;
                        for (let j=0; j<obj.group[i]['group_manager_list'].length; j++){
                            if (obj.group[i]['group_manager_list'][j]==username){
                                found=true;
                                break
                            }
                        }
                   
                    }
            }
       
            if(found){
                res.send({"ok":false});
            }else if(found==false){
                obj.group[found_group]['group_manager_list'].push(username);
                //console.log(obj.group[found_group]['group_manager_list']);
                res.send({"ok":true});
            }
            let objJson=JSON.stringify(obj);
            fs.writeFile('./Data/group.json', objJson,'utf-8',function(err){
                if (err)throw err;
            });
    });
}