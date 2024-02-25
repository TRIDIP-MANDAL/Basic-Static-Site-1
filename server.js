const http=require('http')
const fs=require('fs')
const url=require('url')
const path=require('path')
const server=http.createServer((request,response)=>{
if(request.url==='/')
{
    const HTMLpage=fs.readFileSync('./home.html');
    response.write(HTMLpage);
}
else if(request.url==='/style.css')
{
 let data=fs.readFileSync(path.join(__dirname,'style.css'))
 response.write(data);
}
else if(request.url==='/image.jpg')
{
 let data=fs.readFileSync(path.join(__dirname,'image.jpg'));
 response.write(data);
}
else response.writeHead(404,{'Content-Type':'text/plain'});
response.end();
})
server.listen(3001,()=>{
    console.log("Server started...");
})
server.on('error',(error)=>{
    console.log("unable to start server");
})
