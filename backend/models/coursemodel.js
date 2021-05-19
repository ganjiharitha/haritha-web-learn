const mongoose=require('mongoose');
var courseSchema=new mongoose.Schema({
    course:String,
    id : Number,
    articles:Number,
    isDeleted : Boolean
});
var courseModal=mongoose.model('course',courseSchema);
module.exports=courseModal;