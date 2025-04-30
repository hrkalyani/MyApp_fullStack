require('dotenv').config();
const http = require('http');
const fs = require('fs');

let host = process.env.HOST;
let port = process.env.PORT;

const server = http.createServer((req,res)=>{
    console.log(`request made by=>${req.url}`)
    if(req.url==="/" || req.url==="/home"){
      res.writeHead(200,{"content-type":"text/html"});
    //   res.write("<htm><body> Home request created successfully </body></html>");
    //   res.end();
    let readstreamData = fs.createReadStream(__dirname+'/index.html',"utf-8");
     readstreamData.pipe(res);
    }
    if(req.url==="/about"){
        res.writeHead(200,{"content-type":"text/html"});
        // res.write("<htm><body> About request created successfully </body></html>");
        // res.end();
        let readstreamData = fs.createReadStream(__dirname+'/about.html',"utf-8");
        readstreamData.pipe(res);
        
    }
    if(req.url==="/service"){
        res.writeHead(200,{"content-type":"text/html"});
        // res.write("<htm><body> Service request created successfully </body></html>");
        // res.end();
        let readstreamData = fs.createReadStream(__dirname+'/service.html',"utf-8");
        readstreamData.pipe(res);
    }
    if(req.url==="/contact"){
        res.writeHead(200,{"content-type":"text/html"});
        // res.write("<htm><body> Contact request created successfully </body></html>");
        // res.end();
        let readstreamData = fs.createReadStream(__dirname+'/contact.html',"utf-8");
        readstreamData.pipe(res);
    }
});
server.listen(port,()=>{
    console.log(`server get started on ${host}:${port} `);
})