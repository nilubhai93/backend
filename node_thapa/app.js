const EventEmitter =require("events");

const emitter = new EventEmitter();




emitter.on("greet", (arg)=>{
    console.log(`hello ${arg.name} , now i am learning ${arg.what_do}`);
});


emitter.emit("greet", {name:"My name is nilu maji",  what_do:"Full Stack Development"})



