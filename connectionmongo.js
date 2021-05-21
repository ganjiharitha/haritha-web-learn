const mongoose = require('mongoose');

const pass="Gharitha"
//const pass = process.env.Mongoose_atlas_password;

var connectionString="mongodb+srv://haritha:"+pass+"@cluster0.c6dlh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(connectionString,{useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify: false});

mongoose.connection.on('connected',function()
{
    console.log("Database connected");
});