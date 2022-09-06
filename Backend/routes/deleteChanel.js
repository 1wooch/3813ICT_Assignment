var fs = require('fs');

module.exports=function(req,res){

    var username=req.body.username;
    var chenelname=req.body.chanelname;
    //console.log(username,chenelname); //works

fs.readFile('./Data/chanels.json','utf8',function(error,data){
    const obj=JSON.parse(data);
    //console.log(obj); //works
    for(let i=0; i<obj.chanel.length; i++){
        if(obj.chanel[i]["chanelname"]==chenelname){
            for (let j=0; j<obj.chanel[i]["user_list"].length; j++){
                if(obj.chanel[i]["user_list"][j]==username){
                    obj.chanel[i]["user_list"].splice(j,1);
                    res.send({"ok":true});
                    console.log(obj.chanel);
                    break;

                }
            }
        }
    }
    let objJson=JSON.stringify(obj);
    fs.writeFile('./Data/chanels.json', objJson,'utf-8',function(err){
        if (err)throw err;
    });
});

    
}