const model = require("../models/coursemodel");
module.exports.create = function(req,res){
    var a=new model({
        course : req.body.course,
        articles : req.body.articles,
        id : req.body.id
    });
    a.save();
    var MongoClient = require('mongoose').MongoClient;
   // var url = "mongodb://localhost:27017/";
    var password=process.env.Mongo_atlas_password;
    var url ="mongodb+srv://haritha:"+password+"@cluster0.c6dlh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = {course : req.body.course,
        articles : req.body.articles
          id : req.body.id};
    dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
    res.redirect("/crud");
};

module.exports.getall = function(req,res){
    var q={};
    model.find(q,function(err,allarr){

        res.json(allarr);
    });
/*module.exports.update = function(req,res){
    var q={course:req.body.course};
    var n={$set :{course:req.body.nc,articles:req.body.na}};
    model.updateOne(q,n,function(err,res){
        if(err)
            console.log("error update");
        console.log("updated");
        //res.redirect("/crud");
    });
    res.redirect("/crud");
}*/

};

