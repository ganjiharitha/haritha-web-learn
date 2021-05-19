const express = require('express');
 
const app = express();
const lib = require('./backend/lib/courselib');
const model = require("./backend/models/coursemodel");
app.use(express.static(__dirname+"/frontend"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
var connection=require("./connectionmongo");
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




app.get('/api/course',function(req, res){
    lib.getall(req,res);
})
app.post('/api/course',function(req,res){
     lib.create(req,res);
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
