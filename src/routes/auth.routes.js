const express  =require("express")
const authController  = require("../controllers/auth.controller")
// const { route } = require("../app")

const router  = express.Router()

router.post("/register",authController.userRegisterController)
router.post("/login",authController.userLoginController)

/**
 * - POST /api/auth/logout
 */
router.post("/logout", authController.userLogoutController)

module.exports = router

