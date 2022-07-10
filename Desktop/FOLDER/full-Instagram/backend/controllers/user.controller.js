const res = require("express/lib/response")
const userModel = require("../models/user.signupmodel")
const userpostModel = require("../models/user.upload")
const cloudinary = require("cloudinary")
// const multerUpload = require("../multer/multer")

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

const handleLanding = (req, res) => {
    res.send("This is a disma disma")
}

const registerUser = (req, res) => {
    const newUser = req.body
    const form = new userModel(newUser)
    form.save((err) => {
        if (err) {
            console.log("Attempted signup failed")
            res.send({ message: "There is an error while attemting to signup. Please, try again", status: false })
        } else {
            console.log("Registration succesful")
            res.send({ message: "Thanks for registering with us", status: true })
        }
    })

}


const loginUser = (req, res) => {
    const email_name = req.body.email;
    const password_name = req.body.password;
    userModel.findOne({ email: email_name, password: password_name }, (err, result) => {
        if (err) {
            res.send({ message: 'server error, please try again', status: false })
        } else {
            if (result == null) {
                res.send({ message: 'Invalid Credentials', status: false })
            } else {
                res.send({ message: 'sign in successful', status: true, result })

            }
        }

    })
}

const uploadPost = (req, res) => {
    const file = req.body.myfile
    cloudinary.v2.uploader.upload(file, (err, result) => {
        if (err) {
            console.log(err)
            res.send({ message: "upload failed", status: false })
        } else {
            console.log(result)
            res.send({ message: "upload successfully", status: true, image: result.secure_url })
            console.log(res)
            let userPost = new userpostModel({
                postmessage: req.body.postmessage,
                imageurl: result.secure_url,
                userPostID: req.body.activeID,
                activePostname: req.body.activePostname,
            })
            userPost.save((err) => {
                if (err) {
                    console.log(err)
                    console.log({ message: "Issue in connection", status: false })
                } else {
                    console.log({ message: "post posted succesfully", status: true })
                }
            })

        }
    })
}

const homeDisplay = (req, res) => {
    const activeID = req.body.activeID
    userpostModel.find((err, result) => {
        if (err) {
            console.log(err)
            res.send({ message: "no result show", status: false })
        } else {
            // console.log(result)
            res.send({ message: "item get succesfully", status: true, result })
        }
    })
}

const updateProfile = (req, res) => {
    // console.log(req.body)
    cloudinary.v2.uploader.upload(req.body.profilepics, (err, result) => {
        if (err) {
            console.log(err)
            res.send({ message: "upload failled", status: "false" })
        } else {
            userModel.findOneAndUpdate({ _id: req.body.profileId },
                {
                    $set: { email: req.body.email },
                    $set: { fullname: req.body.fullname },
                    $set: { username: req.body.username },
                    $set: { website_link: req.body.website },
                    $set: { user_avatar: result.secure_url },
                },
                { new: true },
                (err, result) => {
                    if (err) {
                        console.log("There is an error occuring")
                        console.log(err)
                    } else {
                        console.log(result)
                    }
                }
                )
            }
            res.send({ message: "Upload succesfully", status: "true", img_upload: result.secure_url })
    })
}

module.exports = { handleLanding, registerUser, loginUser, uploadPost, homeDisplay, updateProfile }