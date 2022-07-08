const express = require("express")
const router = express.Router()
const userController = require("../controllers/user.controller")

router.get("/", userController.handleLanding)
router.post("/signup", userController.registerUser)
router.post("/login", userController.loginUser)
// router.post('/Home',userController.Home)
router.post("/post", userController.uploadPost)
router.get("/home", userController.homeDisplay)
module.exports = router