var fs = require('fs');

module.exports=function(req,res){

    var username=req.body.username;
    //console.log(username+"111")
    var groupname=req.body.groupname;
    //console.log(groupname+"111");

fs.readFile('./Data/group.json','utf8',function(error,data){
    const userArray=JSON.parse(data);
    found=false
    for (let i=0; i<userArray.group.length; i++){
        if (groupname==userArray.group[i]["groupname"]){
        for (let j=0; j<userArray.group[i]['group_manager_list'].length; j++){
            //console.log(j);
          //console.log(userArray.group[i]['group_manager_list'].length);

            if(username==userArray.group[i]['group_manager_list'][j]){
            //console.log(userArray.group[i]['user_list'][j]);
            userArray.group[i]['group_manager_list'].splice(j,1);
            res.send({"ok":true});
            //console.log(userArray.group[i]);
           // console.log(found);

            break;

            }
            }
        }
    }
    if (found=false){
        console.log("not exist");

    }
   
    let objJson=JSON.stringify(userArray);
    fs.writeFile('./Data/group.json', objJson,'utf-8',function(err){
        if (err)throw err;
    });
});
    
}