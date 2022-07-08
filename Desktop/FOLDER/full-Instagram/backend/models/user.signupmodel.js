const mongoose = require("mongoose")
const signupSchema = mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    fullname:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    numberOfPost:{
        type:Number,
        require:true
    },
    numberOfFollowers:{
        type:Number,
        require:true,
    },
    numberOfFollowing:{
        type:Number,
        require:true
    },
    user_avatar:{
        type:Number,
        require:true
    },
    date:{
        type: Date,
        default: Date.now
    }
})
const userModel = mongoose.model("registeredUser", signupSchema)
module.exports = userModel