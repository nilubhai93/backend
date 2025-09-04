const express = require("express");
const router = express.Router();
const Person = require("../models/Person")




router.post("/", async (req, res) => {
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



router.get("/", async (req, res) => {
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
        res.status(200).json({message:"person delete success"})

    } catch (error) {
        console.log(err);
        res.status(500).json({ error: "error deleting" })
    }
})


module.exports = router