require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let host = process.env.HOST;
let port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/product",(req,res,next)=>{
    res.send("Simple get request for Product");
})

app.delete("/product",(req,res,next)=>{
    res.send("Simple delete request for Product");
})
app.post("/product",(req,res,next)=>{
    res.setHeader('Content-Type', 'text/plain');
    let prodObj={
        userid:req.body.user,
        userpass:req.body.password
    }
    // res.send("Simple post request for Product");
    res.send(JSON.stringify(prodObj));
    
})
app.put("/product",(req,res,next)=>{
    res.send("Simple put request for Product");
})
app.get("/*",(req,res,next)=>{
    res.send("bad request");
})

app.listen(port,()=>{
    console.log(`My server get started on ${host}:${port}`)
})



