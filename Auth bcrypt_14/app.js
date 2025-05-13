// cookieParser

// const cookieParser = require("cookie-parser");
// const express = require("express");
// const app =express();

// app.use(cookieParser());
// app.get("/", function(req,res){
//     res.cookie("name","nilu_maji")
//     res.send("done done");
// })

// app.get("/read", function(req,res){
//     console.log(req.cookies)
//     res.send("read page")
// })
// app.listen(3000);






// bcrypt
// const express = require("express");
// const app =express();
// const bcrypt= require("bcrypt");

// // app.get("/", function(req,res){
// //     bcrypt.genSalt(10,function(err,salt){
// //         bcrypt.hash("niladri",salt,function(err,hash){
// //             console.log(hash);
// //         })
// //     })
// // })
// app.get("/", function(req,res){
//     bcrypt.compare("niladri","$2b$10$Coe.h3bNKqeBbXDmvgbl2.ORvWS0wwESw/FnW0.9LjLOW17Bxc4fu", function(err,result){
//         console.log(result)
//     })
// })
// app.listen(3000);







// JWT
const express = require("express");
const app =express();
const bcrypt= require("bcrypt");
const jwt= require("jsonwebtoken");
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.get("/", function(req,res){
    let token = jwt.sign({email:"nilu@gmail.com"}, "secret");
    res.cookie("token", token)
    res.send("done")
})

app.get("/read",function(req,res){
    let data = jwt.verify(req.cookies.token, "secret");
    console.log(data);
})

app.listen(3000);

