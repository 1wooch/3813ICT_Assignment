const MongoClient = require('mongodb').MongoClient;

module.exports = function (app, client) {
  app.post('/test', function (req, res) {
    const collection = client.db('mydb').collection('test');
    collection.find({ username: "WWC" }).toArray(function(err, data) { 
      //console.log(client.db('mydb').getCollectionNames());
    });
    //console.log(client.db('mydb').getCollectionNames());
    console.log(collection)
    console.log(req.body);
    collection.findOne({
      username: req.body.username,
    }).then( function(result) {
      if(result) {
        if (result.username == req.body.username && result.password == req.body.password) {
          console.log("password correct!");
          res.send({
            ok: true,
            username: result.username,
            email: result.email
          });
        } else {
          console.log("password wrong!");
          client.close()
          res.send({
            ok: false
          });
        }
      } else {
        console.log("user not found")
        client.close()
        res.send({
          ok: false
          
        });
      }
    });
  });
}