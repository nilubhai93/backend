const express = require("express");
const router = express.Router();
const Person = require("../models/Person")
const { jwtAuthMiddware, generateToken } = require("./../jwt")


router.post("/signup", async (req, res) => {
    try {
        const data = req.body
        const newPerson = new Person(data);

        const response = await newPerson.save()
        console.log("data saved");

        const payload = {
            id: response.id,
            username: response.username
        }
        console.log(JSON.stringify(payload))


        const token = generateToken(payload);
        console.log("Token is : ", token);

        res.status(200).json({ response: response, token: token });


    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "internal server error" })
    }
})






// login route
router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        // find user
        const user = await Person.findOne({ userName: username });

        // if not found user
        if (!user || (!await user.comparePassword(password))) {
            return res.status(401).json({ error: "invalidusrname and password" });
        }



        // generate token
        const payload = {
            id: user.id,
            username: user.username
        }

        const token = generateToken(payload);
        res.json({ token })
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal serverrr errrrrror" })
    }
})







// profile route
router.get("/profile",jwtAuthMiddware,  async (req,res)=>{
    try {
        const userdata = req.user;
        console.log("User Data",userdata) 

        const userId = userdata.id;
        const user = await Person.findById(userId);

        res.status(200).json({user});


    } catch (error) {
        console.error(error)
        res.status(500).json({error:"Internal Server Error"});
    }
})






router.get("/",jwtAuthMiddware, async (req, res) => {
    try {
        const data = await Person.find();
        console.log("data fetched..");
        res.status(200).json(data)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "fetching error" })
    }
})



// router.get("/:id",async (req,res)=>{
//     try {
//         const data= await Person.findById();
//         console.log("person found usig id");
//         res.status(200).json(data)
//     } catch (error) {
//         console.log(error);
//          res.status(500).json({ error: "person not found using id" })
//     }
// })



router.get("/:workType", async (req, res) => {
    try {
        const workType = req.params.workType;
        if (workType == "chef" || workType == "manager" || workType == "waiter") {
            const response = await Person.find({ work: workType })
            console.log("res fetched..")
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: "Invalid work type" })
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "internal server error" })
    }
})



// update
router.put("/:id", async (req, res) => {
    try {
        const personId = req.params.id;
        const updatedPersonData = req.body;
        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true,
            runValidators: true
        });

        if (!response) {
            return res.status(404).json({ error: "Person not found" })
        }

        console.log("data updated successfully...")
        res.status(200).json(response)


    } catch (error) {
        console.log(err);
        res.status(500).json({ error: "internal server error" })
    }
})



// delete
router.delete("/:id", async (req, res) => {
    try {
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId)
        if (!response) {
            return res.status(404).json({ error: "Person not found" })
        }
        console.log("person delete")
        res.status(200).json({ message: "person delete success" })

    } catch (error) {
        console.log(err);
        res.status(500).json({ error: "error deleting" })
    }
})


module.exports = router