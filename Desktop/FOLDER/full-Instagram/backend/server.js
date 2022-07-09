const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
require("dotenv").config();
const bodyParser = require("body-parser")
// app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true, limit:"50mb"}))
app.use(bodyParser.json({limit:"50mb"}))
const userRouteer = require("./routes/user.route")
app.use("/user", userRouteer)
const MONGO_URL = process.env.MONGO_DB
const mongoose = require("mongoose")

mongoose.connect(MONGO_URL, (err)=>{
    if (err) {
        console.log("error occur while connecting to the database")
    } else {
        console.log("Connected to database successfully")
    }
})

app.listen(4007, ()=>{
    console.log("server is running at port 4007")
})