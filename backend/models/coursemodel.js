const mongoose=require('mongoose');
var courseSchema=new mongoose.Schema({
      names : {
        type : String,
        required : true
    },
    articles : {
        type : String,
        required : true
    },
    id : {
        type : String,
        required : true
    }

}, {timestamps : true})
var table=mongoose.model('crud',courseSchema);
module.exports=table;