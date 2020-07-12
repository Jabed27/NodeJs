//global objects
console.log("Jabed boss!")
time =0;
var timer = setInterval(function(){
    time+=3
    console.log(time+' seconds passed')
    if(time>13){
        clearInterval(timer)
    }
},3000)
