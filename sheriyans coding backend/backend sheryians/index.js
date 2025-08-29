const express = require('express');
const app = express();
const path = require("path");


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "ejs");


app.get("/", function(req,res){
    // res.send("chal rha hain");
    res.render("index")
});


app.get("/profile/:username", function(req,res){
    res.send(`your name is ${req.params.username}`)
})

app.get("/auther/:user/:age", function(req,res){
    res.send(`your name is ${req.params.user} and age is ${req.params.age}`);
})

app.listen(3000,function(){
    console.log("it's running...")
})