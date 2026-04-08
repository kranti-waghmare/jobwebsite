// const mongoose = require("mongoose");
const mongoose = require("mongoose")
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors())

const userRoutes = require("./routes/userRoutes")
app.use("/demo/user" , userRoutes)

// mongoose.connect("mongodb+srv://finalDemo:Final%40123@cluster0.vw4yt31.mongodb.net/?appName=Cluster0")
// mongoose.connect("mongodb+srv://finalDemo:Final%40123@cluster0.vw4yt31.mongodb.net/")
mongoose.connect("mongodb+srv://finalDemo:Final%40123@cluster0.vw4yt31.mongodb.net/myDatabase")

.then(()=> console.log("connected DB"))
.catch((err)=> console.log(err))

app.listen(5000,()=>{
    console.log("server is running on port 5000")
})