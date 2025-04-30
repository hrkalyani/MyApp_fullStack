require('dotenv').config();
const express = require('express');
const app =  express();


let host = process.env.HOST;
let port = process.env.PORT;



app.get("/",(req,res,next)=>{
    //res.send("send the request")
    res.sendFile(__dirname+'/index.html');
});
app.get("/home",(req,res,next)=>{
    // res.send("this is home request");
    res.sendFile(__dirname+'/index.html');
});
app.get("/about",(req,res,next)=>{
    // res.send("this is about request");
    res.sendFile(__dirname+'/about.html');
});
app.get("/service",(req,res,next)=>{
    // res.send("this is service request");
    res.sendFile(__dirname+'/service.html');
});
app.get("/contact",(req,res,next)=>{
    // res.send("this is contact request");
    res.sendFile(__dirname+'/contact.html');
});
app.get("/*",(req,res,next)=>{
    // res.send("this is contact request");
    res.sendFile(__dirname+'/404.html');
});
app.listen(port,()=>{
    console.log(`My Server started on ${host}:${port}`);
})


