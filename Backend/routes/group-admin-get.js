var fs = require ('fs');



module.exports=function(req,res){
    var username=req.body.username;
    var groupname;

    fs.readFile('./Data/group.json','utf8',function(error,data){
        if (error) return console.log(error);
        const userArray=JSON.parse(data);
        console.log("input user name: "+username);
        var found=false;

        for (let i=0; i<userArray.group.length; i++){
            for (let j=0; i<userArray.group[i]['group_manager_list'].length; j++){
                if (username==userArray.group[i]['group_manager_list'][j]){
                //console.log("input user name"+username);
                //console.log("manager user name"+userArray.gorup[i]['group_manager_list']);
                //result=userArray.group[i];
            
                console.log(userArray.group[i]['group_manager_list'][j]);
                groupname=userArray.group[i]['groupname'];
                //console.log("test1");
                var found=true;

                break;

            }}
        }
        if (found==true){
            res.send({"ok":true,"groupname":groupname});
        }else{
            console.log("404 no group member found");
            res.send({"ok":false});

        }
    });
}