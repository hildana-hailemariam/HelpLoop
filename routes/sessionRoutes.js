const express = require("express");

const router = express.Router();

const sessionController = require("../controllers/sessionController");


// Get all sessions

router.get(
    "/",
    sessionController.getAllSessions
);


// Create session booking

router.post(
    "/create",
    sessionController.createSession
);


// Update session status

router.put(
    "/:id",
    sessionController.updateStatus
);



module.exports = router;