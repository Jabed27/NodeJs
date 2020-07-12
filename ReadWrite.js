var http = require('http');
var fs = require('fs');  //fs does many thing specially read write

//var readme = fs.readFileSync('readMe.txt','utf8');//syncronous func block the code, after finishing 
//then it will jump to the next part of the code
var content = 'kjasdkjasdkjk'
fs. readFile('readMe.txt', function(err, contents) {
    console. log(contents);
});
console. log('after calling readFile');