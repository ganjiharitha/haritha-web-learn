const mongoose=require('mongoose');
var courseSchema=new mongoose.Schema({
    name:String,
    id : Number,
    Articles:Number,
    isDeleted : Boolean
});
var courseModal=mongoose.model('courseTable',courseSchema);
module.exports=courseModal;