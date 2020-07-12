const http = require('http');
const express = require('express');
var fs = require('fs'); 
const app = express();

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port,()=>{
    console.log("server running ")

    var content="jabed i love you";
    fs.readFile('readMe.txt','utf8',(err,data)=>{
        console.log(data)
        console.log(err)
    })
});