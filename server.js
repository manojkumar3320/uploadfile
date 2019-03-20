const express = require('express');
const app = express();

http = require("http").Server(app).listen(3000),
upload = require("express-fileupload");
app.use(upload())

console.log("server Started")
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})
app.post("/",function(req,res){
    if(req.files){
        var file = req.files.filename,
        filename = file.name;
        file.mv("./upload/"+filename,function(err){
            if(err){
                console.log("error occured")
            }
            else{
                res.send("done")
            }
        })
    }
})