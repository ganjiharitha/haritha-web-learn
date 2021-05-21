const table = require("../models/coursemodel");

module.exports.getall = function(req,res){
    table.find()
    .then((result) =>{
        res.send(result);
        console.log("Retrived Successfully");
    })
    .catch((err) => {
        console.log("Error getting Data:"+err);
    })
}

module.exports.addnew = function(req,res){
    var newUser= req.body;
    const newTable = new table({
        names : newUser.names,
        articles : newUser.articles,
        id : newUser.id
    })
    console.log("Added Successfully")
    newTable.save();
}
module.exports.deleteit = function(req,res){
    var i=req.params.id
    table.findByIdAndDelete(i, (err)=>{
        if(err){
            console.log('Error Deleting :'+err);
        }
        else{
            console.log('Successfully deleted');
        }
    })
}
module.exports.update = function(req,res){

    var id =req.params.id;
    table.findByIdAndUpdate(id, {articles: req.body.articles},
        function (err, docs) {
        if (err){
            console.log("Error update : "+err)}
        else{
            console.log("Successfully Updated");}
        });

}