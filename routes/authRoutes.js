const express = require("express");

console.log("AUTH ROUTES FILE LOADED");

const router = express.Router();

const authController = require("../controllers/authController");

router.get("/test", (req, res) => {
    res.send("Auth route works");
});

// Register

router.post(
    "/register",
    authController.register
);


// Login

router.post(
    "/login",
    authController.login
);


module.exports = router;