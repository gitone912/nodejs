import http from 'http';
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/plain;charset=utf-8')
    res.end("server is runhsffu ck ning")
});
const port = process.env.PORT || 8000;
const host = process.env.HOST || 'localhost';
server.listen(port,host,(err)=>{
    if(err){
        console.log(err);
    }
    console.log('server is runnsafjsfjaing');
});