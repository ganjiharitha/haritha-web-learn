const mongoose = require('mongoose');
//var password=process.env.MONGO_atlas_password;
var connectionString="mongodb+srv://haritha:Gharitha@cluster0.c6dlh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(connectionString,{useNewUrlParser: true,useUnifiedTopology: true});

mongoose.connection.on('connected',function()
{
    console.log("Database connected");
});