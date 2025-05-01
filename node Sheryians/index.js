const express = require("express");
const morgan = require("morgan");
const app = express();
const dbConnection = require("./config/db")
const userModel = require("./models/user")


// built in middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public")) //for link css



app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.render("index")
})


app.get('/', (req, res) => {
    res.send("<h1>Hello world</h1>")
})

app.get('/about', (req, res) => {
    res.send("<h1>This is about</h1>")
})

app.get('/profile', (req, res) => {
    res.send("<h1>This is profile page</h1>")
})

app.get('/register', (req, res) => {
    res.render("register")
})

app.post("/register", async (req, res) => {
    // console.log(req.body)
    const { username, email, password } = req.body;

    const newUser = await userModel.create({
        username: username,
        email: email,
        password: password
    })
    res.send(newUser)
})


// app.get('/get-users',(req,res)=>{
//     userModel.find({
//         password:"42"
//     }).then((users)=>{
//         res.send(users)
//     })
// })

// app.get('/get-users',async (req,res)=>{
//     await userModel.findOneAndUpdate({
//         password:"10"
//     },{
//         email:"abc@gmail.com"
//     })
//     res.send("user updated")
// })

app.get('/delete-user',async (req,res) => {
    await userModel.findOneAndDelete({
        email:"niladrimaji9382@gmail.com"
    })
    res.send("user deleted")
})






app.post("/get-form-data", (req, res) => {
    console.log(req.body)
    res.send("data received")
})



app.listen(3000);