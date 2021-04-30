const express = require('express');
 
const app = express();
 
app.get("/", function(req, res){
    res.send("Welcome to Ganji Haritha's Basic Site");
})
app.get("/resume", function(req, res){
    file=__dirname+"/resume.html";
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
