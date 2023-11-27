const express = require("express")
const mongoose = require('mongoose')

const router = express()
const model = require("./database/mongoose.js")
router.get("/todos",async(req,res)=>{
    try{
        const studentdata = await model.find({})
        console.log(studentdata)
        if(!studentdata){
            return res.status(404).json("data not found")
        }
        else{
            return res.status(200).json(studentdata)

        }
    }
    catch(error){
        console.log(error)
        return res.status(400).json({message:error.message})
    }
})
router.post("/todos",async(req,res)=>{
    try {
        const anas = await new model(req.body)
      
        const title = req.body.title
        const isCompleted = req.body.isCompleted
        if(!title){
            res.status(400).json("all field are required")
        }
    else{

        const abdul = await anas.save()
        console.log(abdul)
        res.status(200).json(abdul)
    }
    } catch (error) {
        console.log("data can't be post ")
    }


})
router.get("/todos/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const studentdata = await model.findById(_id)
        console.log(studentdata)
        if(!studentdata){
            return res.status(404).json("data not found")
        }
        else{
            return res.status(200).json("we have sucessfully got data may be may be not")

        }
    }
    catch(error){
        console.log(error)
        return res.status(400).json({message:error.message})
    }
})
router.put("/todos/:id",async(req,res)=>{
try{
    const _id = req.params.id;
    if(_id){
        const updatestudents = await model.findByIdAndUpdate(_id,req.body);
        res.status(200).json("updated sucessfully " +updatestudents)
        console.log(updatestudents)
    }
    else{
        res.json("invalid url")
    }


}
catch(error){
    res.status(400).send("some thig is missing")
}
})
router.delete("/todos/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        if(_id){
            const deletestudents = await model.findByIdAndDelete(_id,req.body);
            res.status(200).json("deleted  sucessfully " +deletestudents)
            console.log("deleted sucessfully")
        }
        else{
            res.json("invalid url")
        }
    
    
    }
    catch(error){
        res.status(400).send("not deleted error happened")
    }
    })
    
    module.exports = router
