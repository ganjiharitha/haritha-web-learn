require("./connectionmongo");
const app=require('./backend/lib/courselib.js');
app.create({course : "Mean Stack Course" , articles : "43"},function(err,course){
    console.log(course);
})