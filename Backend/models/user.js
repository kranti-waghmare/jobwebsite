const mongoose = require("mongoose")

const userSchenma = new mongoose.Schema({
 name:{
    type: String,
    required: true,

 },
 
 email:{
    type: String,
    

 },
 role:{
    type: String,
  

 },
 phone:{
    type: String,
 

 },


}, {timestamps: true})

module.exports = mongoose.model("Coder", userSchenma)