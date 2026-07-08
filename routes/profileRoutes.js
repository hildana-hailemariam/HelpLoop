const express = require("express");

const router = express.Router();

const profileController = require("../controllers/profileController");


// Get profile

router.get(
    "/",
    profileController.getProfile
);


// Update profile

router.put(
    "/update",
    profileController.updateProfile
);


module.exports = router;