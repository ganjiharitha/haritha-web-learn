const express = require('express');
const app = express();

const lib = require('./backend/lib/courselib');
const table = require("./backend/models/coursemodel");
app.use(express.static(__dirname+"/frontend"));


app.use(express.urlencoded({extended:true}));
app.use(express.json());

const mongoose = require('mongoose');
//var password=process.env.Mongo_atlas_password;
var connectionString="mongodb+srv://haritha:Gharitha@cluster0.c6dlh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(connectionString,{useNewUrlParser: true,useUnifiedTopology: true});

mongoose.connection.on('connected',function()
{
    console.log("Database connected");
});


app.get("/", function(req, res){
    homepage=__dirname+"/frontend/allhtmlfiles/homep.html";
    res.sendFile(homepage);
})
app.get("/google", function(req, res){
    gpage=__dirname+"/frontend/allhtmlfiles/googleen.html";
    res.sendFile(gpage);
})



app.get("/crud", function(req, res){
    gpage=__dirname+"/frontend/allhtmlfiles/coursebackend.html";
    res.sendFile(gpage);
})
app.get('/crud/get',function(req, res){
     table.find()
    .then((result) =>{
        res.send(result);
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })

  //  lib.getall(req,res);
})
app.post('/crud/post',function(req,res){
     var newUser= req.body;
    const newTable = new table({
        names : newUser.names,
        articles : newUser.articles,
        id : newUser.id
    })
    console.log(newTable);
    newTable.save();

     //lib.create(req,res);
})
app.delete('/crud/del/:id', function(req, res){
    var i=req.params.id
    table.findByIdAndDelete(i, (err)=>{
        if(err){
            console.log('Error:'+err);
        }
        else{
            console.log('Success');
        }
    })
})

app.put('/crud/put/:id', function(req, res){
    var i=req.params.id

    table.findById(i, function (err,Obj) {
        if(err){
            console.log('Error:' + err);
        }
        else{
            table.findByIdAndUpdate(i, {articles: req.body.articles }, function(){})
        };
    });


})



app.get("/homepage", function(req, res){
    homepage=__dirname+"/frontend/allhtmlfiles/homep.html";
    res.sendFile(homepage);
})
app.get("/resume", function(req, res){
    file=__dirname+"/frontend/allhtmlfiles/resume.html";
    res.sendFile(file);
})
app.get("/apple", function(req, res){
    applel=__dirname+"/frontend/allhtmlfiles/apple.html";
    res.sendFile(applel);
})
app.get("/rgb", function(req, res){
    rgbpage=__dirname+"/frontend/allhtmlfiles/rgb.html";
    res.sendFile(rgbpage);
})
app.get("/login", function(req, res){
    applel=__dirname+"/frontend/allhtmlfiles/loginpage.html";
    res.sendFile(applel);
})
app.get("/register", function(req, res){
    rgbpage=__dirname+"/frontend/allhtmlfiles/registerpage.html";
    res.sendFile(rgbpage);
})
app.get("/todo", function(req, res){
   page=__dirname+"/frontend/allhtmlfiles/todo.html";
    res.sendFile(page);
})
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
