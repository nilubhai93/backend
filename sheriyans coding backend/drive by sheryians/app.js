const express = require("express")
const app = express();
const userRouter = require("./routes/user.routes");

app.set("view engine","ejs");

app.use("/user", userRouter)





const PORT=3000;
app.listen(PORT,()=>{
    console.log(`server is running on port no ${PORT}...`)
})

