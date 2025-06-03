const express = require("express")
const app = express()
const userModel = require("./models/user")
const postModel = require("./models/post")



app.get("/", function (req, res) {
    res.send("hey");
})

app.get("/create", async function (req, res) {
    let user = await userModel.create({
        username: "harsh",
        age: 24,
        email: "nilu@gmail.com"
    })
    res.send(user)

})

app.get("/post/create", async function (req, res) {
    let post = await postModel.create({
        postdata: "hello hi how are you",
        user: "682315716a5daf6932364408"
    })

    let user = await userModel.findOne({_id:"682315716a5daf6932364408"});
    user.posts.push(post._id);
    await user.save();
    res.send({post,user})
})


app.listen(3000);