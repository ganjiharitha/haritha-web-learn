const express = require('express');
 
const app = express();
app.use(express.static(__dirname+"/frontend"));
app.get("/", function(req, res){
    gpage=__dirname+"/frontend/allhtmlfiles/googleen.html";
    res.sendFile(gpage);
})

app.get("/homepage", function(req, res){
    homepage=__dirname+"/frontend/allhtmlfiles/homep.html";
    res.sendFile(homepage);
})
app.get("/resume", function(req, res){
    file=__dirname+"/frontend/allhtmlfiles/resume.html";
    res.sendFile(file);
})
app.get("/game", function(req, res){
    res.send("Welcome to Haritha's Game Page");
})
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
