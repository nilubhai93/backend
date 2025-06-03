const express = require("express")
const app = express()
const cookieParser = require("cookie-parser");
const userModel = require("./models/user");


app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());



app.get("/",(req,res)=>{
    res.render("index");
});

app.post("/register",async(req,res)=>{
    let{email,password,username, name, age}=req.body;
    let user = await userModel.findOne({email})
    if(user) return res.status(500).send("user already registered")

});




app.listen(3000, () => {
    console.log("Server running on port 3000.....");
});