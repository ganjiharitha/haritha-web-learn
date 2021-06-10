const express = require('express');
const path = require('path');
const webRouter = express.Router();
const htmlbase = path.join(__dirname, "../../frontend/allhtmlfiles");



webRouter.get('/',function(req, res){
    res.sendFile(path.join(htmlbase, "homep.html"));
})
webRouter.get("/google",function(req, res){
    res.sendFile(path.join(htmlbase, "googleen.html"));
})
webRouter.get("/homepage", function(req, res){
    res.sendFile(path.join(htmlbase, "homep.html"));
})
webRouter.get("/resume", function(req, res){
    res.sendFile(path.join(htmlbase, "resume.html"));
})
webRouter.get("/apple", function(req, res){
    res.sendFile(path.join(htmlbase, "apple.html"));
})
webRouter.get("/rgb", function(req, res){
    res.sendFile(path.join(htmlbase, "rgb.html"));
})
webRouter.get("/login", function(req, res){
    res.sendFile(path.join(htmlbase, "loginpage.html"));
})
webRouter.get("/register", function(req, res){
   res.sendFile(path.join(htmlbase, "registerpage.html"));
})
webRouter.get("/todo", function(req, res){
    res.sendFile(path.join(htmlbase, "todo.html"));
})
webRouter.get("/tambola", function(req, res){
    res.sendFile(path.join(htmlbase, "tambola.html"));
 })
webRouter.get("/crud", function(req, res){
    res.sendFile(path.join(htmlbase, "coursebackend.html"));
})


module.exports = webRouter;