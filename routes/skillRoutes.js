const express = require("express");

const router = express.Router();

const skillController = require("../controllers/skillController");


// Get all skills

router.get(
    "/",
    skillController.getAllSkills
);


// Create a skill

router.post(
    "/create",
    skillController.createSkill
);


// Get one skill

router.get(
    "/:id",
    skillController.getSkill
);



module.exports = router;