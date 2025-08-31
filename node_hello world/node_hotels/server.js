const express = require('express')
const app = express();
const db = require("./db")
require("dotenv").config();
const personRoutes = require("./routes/personRouter")
const menuRoutes = require("./routes/menuRoutes")

 

const bodyParser = require("body-parser");
app.use(bodyParser.json());


app.get("/", function (req, res) {
    res.send("welcome to my hotel...")
})


// person
app.use("/person", personRoutes)
app.use("/menu",menuRoutes)

// menu












app.listen(3000, () => {
    console.log('listening on port 3000');
})

