const http = require('http');

 let server = http.createServer((req,res)=>{
    if(req.url=="/"){
        res.write("request for Home Page");
        res.end();
    }
    if(req.url=="/about"){
        res.write("request for About Page");
        res.end();
    }
    if(req.url=="/contact"){
        res.write("request for Contact Page");
        res.end();
    }
   
  });

  server.listen(5555,()=>{
    console.log("my server start");
  })