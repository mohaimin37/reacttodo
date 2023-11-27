const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/oohwow").then(()=>{
    console.log("you connected successfully")
}).catch(()=>{
    console.log("oops something is missing in database")
})
const schema =  mongoose.Schema({
  title:{
    type:String,
  },
  isCompleted:{
    type:String,
  },
},
{timestamps:true})
const model = new mongoose.model("collection",schema)

module.exports = model