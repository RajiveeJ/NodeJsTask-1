let http= require('http');
let fs= require('fs');



const server= http.createServer((req,res)=>{
    let date = new Date()
    fs.writeFile('./current date-time.txt',`${date}`,(err)=>{
        if(err)
        console.log(err)
    })
    fs.readFile('./current date-time.txt',(err,data)=>{
        if(err)
        console.log(err)
        res.writeHead(200,{'context-Type':'text/html'});
        res.end(data);
    })
})
server.listen(8000,()=>console.log("Server listening to port "+8000))