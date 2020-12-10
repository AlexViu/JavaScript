/*var events = require('events');
var EventsE = events.EventEmitter; 
var ee = new EventsE(); 

ee.on('data', function(date) { 
 console.log(date); 
}); 
setInterval(function() { 
 ee.emit('data', new Date().toISOString()
 ); 
}, 500);

ee.on("evento", function(mensaje){
    console.log(mensaje);

})

ee.emit("evento", "el evento se ha emitido");*/

var events = require('events');
var util = require('util');

class Person extends events.EventEmitter {
 constructor(name) {
 super();
 this.name = name;
 }
}

var manu = new Person('manu');
var boris = new Person('boris');
var people = [manu, boris];

manu.on('talk', function (message){
    console.log(manu.name + ' has said ' + message)
})

boris.on('talk', function (message){
    console.log(boris.name + ' has said ' + message)
})

manu.emit(`talk`, `I hope you study node`);
boris.emit(`talk`, `I add that a lot`);