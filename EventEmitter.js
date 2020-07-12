var events = require('events')
var util = require('util')//for the purpose of inherite to the constructor
//creating constructor
var Person = function(name){
     this.name = name;
};
util.inherits(Person,events.EventEmitter);//Person constuctor e eventemitter add kore dise
//creating objects
var jabed= new Person('jabed');
var asad = new Person('asad');
var sifat = new Person('sifat');
var people = [jabed,asad,sifat];
// creating listener
people.forEach(function(person){
     person.on('speek',function(msg){
         console.log(person.name+'said'+msg);
     });
});
//creating eventsemit
jabed.emit('speak','Hey dudes')
asad.emit('speak','Hey i need something else')
