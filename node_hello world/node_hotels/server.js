const express = require('express')
const app = express();
const db = require("./db")
require("dotenv").config();
const passport = require("./auth")
const session = require('express-session');



const bodyParser = require("body-parser");
app.use(bodyParser.json());




// middleware function
const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
    next();
}
app.use(logRequest)









// route
const personRoutes = require("./routes/personRouter")
const menuRoutes = require("./routes/menuRoutes")

app.use(passport.initialize());
const localMidware = passport.authenticate("local",{session:true})

app.get("/", function (req, res) {
    res.send("welcome to my hotel...")
})

// person
app.use("/person", personRoutes)
app.use("/menu", menuRoutes)







const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running...");
});

