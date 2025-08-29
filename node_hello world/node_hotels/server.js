const express = require('express')
const app = express();
const db = require("./db")

const bodyParser = require("body-parser");
app.use(bodyParser.json());


const Person = require("./models/Person")


app.get("/", function (req, res) {
    res.send("welcome to my hotel...")
})

app.post("/person", async (req, res) => {
    try {
        const data = req.body
        const newPerson = new Person(data);

        const response = await newPerson.save()
        console.log("data saved");
        res.status(200).json(response);

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "internal server error" })
    }
})


app.get("/person", async (req, res) => {
    try {
        const data = await Person.find();
        console.log("data fetched..");
        res.status(200).json(data)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "fetching error" })
    }
})







app.listen(3000, () => {
    console.log('listening on port 3000');
})

