const express = require("express");
const app = express();
const userModel = require("./usermodel")

app.get("/", (req, res) => {
    res.send("hey...");
})

app.get("/create", async (req, res) => {
    let createuser = await userModel.create({
        name: "niladri maji",
        email: "nilu@gmail.com",
        username: "nilu"
    })
    res.send(createuser);
})

app.get("/update", async (req, res) => {
    let updateduser = await userModel.findOneAndUpdat(
        { username: "nilu" },  
        { name: "niladri" },     
        { new: true } 
    );
    res.send(updateduser);
});

app.get("/read",async (req, res) => {
    let users = await userModel.find();
    res.send(users)
});


app.get("/delete",async (req, res) => {
    let deleteusers = await userModel.deleteMany({usename:"nilu"});
    res.send(deleteusers)
});


app.listen(3000);