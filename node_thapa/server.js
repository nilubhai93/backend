const http = require('http');

const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write("Hello World");
        res.end();
    }

    if (req.url==="/home"){
        res.setHeader("Content-Type","text/plain ");
        res.write("My Name is :-  Niladri Sekhar Maji");
        res.end();
    }

});

const PORT=3000;
server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}.....`);
});


