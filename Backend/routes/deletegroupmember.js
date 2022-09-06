var fs = require('fs');

module.exports=function(req,res){

    var username=req.body.username;

    var inputdata={
        "username":username,
    }
    //console.log("test1"+username);//works
fs.readFile('./Data/group.json','utf8',function(error,data){
    const userArray=JSON.parse(data);
    found=false
    for (let i=0; i<userArray.group.length; i++){
        for (let j=0; i<userArray.group[i]['user_list'].length; j++){
            if(username==userArray.group[i]['user_list'][j]){
            //console.log(userArray.group[i]['user_list'][j]);
            userArray.group[i]['user_list'].splice(j,1);
            res.send({"ok":true});
            //console.log(userArray.group[i]);

            break;

            
            }
    }
}
   
    let objJson=JSON.stringify(userArray);
    fs.writeFile('./Data/group.json', objJson,'utf-8',function(err){
        if (err)throw err;
    });
});
    
}