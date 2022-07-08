const mongoose = require("mongoose")

const uploadSchema = mongoose.Schema({
    postmessage:{
        type:String,
        required:true
    },
    imageurl:{
        type:String,
        required:true
    },
    userPostID:{
        type:String
    },
    activePostname:{
        type:String
    },
    date:{
        type: Date,
        default: Date.now
    }
})
let userupload = mongoose.model("userpost", uploadSchema)
module.exports = userupload