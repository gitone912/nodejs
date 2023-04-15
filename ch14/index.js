import http from 'http';
import fs from 'fs';
import { error } from 'console';
const server = http.createServer((req,res)=>{
    console.log(req.url);
    // res.setHeader('Content-Type','text/plain;charset=utf-8')
    res.writeHead(200,{
        'Content-Type':'text/html'
    });
    if(req.url === '/'){
        fs.readFile('home.html',(error,data)=>{
            if (error) throw error;
            res.end(data);
        })
        // res.end(" <h1>home</h1> ")
    }
    else{
        res.end("not found")
    }
    if(req.url === '/about'){
        res.end(" <h1>about</h1> ")
    
    }
   
});
const port = process.env.PORT || 8000;
const host = process.env.HOST || 'localhost';
server.listen(port,host,(err)=>{
    if(err){
        console.log(err);
    }
    console.log('server is running at'+host);
});