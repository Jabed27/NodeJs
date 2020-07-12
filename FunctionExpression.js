//function expression

function callbackfunction(func){
   func();
}
var saybye=function(){
     console.log('bye');
}
callbackfunction(saybye)
