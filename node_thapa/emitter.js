const  EventEmitter = require("events");
const emitter = new EventEmitter();


const EventCounts={
    "user-login":0,
    "user-purchase":0,
    "profile-update":0,
    "log-out":0
}


emitter.on("user-login",(user)=>{
    console.log(`${user} log in`);
});
emitter.on("user-purchase",(user, product)=>{
    console.log(`${user}purchase ${product}`);
});
emitter.on("profile-update",(user)=>{
    console.log(`${user} profile-update`);
});
emitter.on("log-out",(user)=>{
    console.log(`${user} log-out`);
});


emitter.on("summary",()=>{
    console.log(EventCounts);
});



emitter.emit("user-login","Nilu");
emitter.emit("user-purchase","Laptop");
emitter.emit("profile-update","Nilu", "email");  
emitter.emit("log-out","Nilu");


emitter.emit("summary");