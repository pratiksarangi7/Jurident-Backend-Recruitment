const express = require("express");
const userControllers = require("./../controllers/user_controllers");
const router = express.Router();
router.post("/signup", userControllers.signUp);
router.post("/login", userControllers.login);
module.exports = router;
