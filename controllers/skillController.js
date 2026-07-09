const Skill = require("../models/Skill");


// Display all skills
const getAllSkills = async (req, res) => {

    try {

        const skills = await Skill.getSkills();

        res.json(skills);

    } catch (error) {

        console.log("GET SKILLS ERROR:", error);

        res.status(500).json({
            message: error.message
        });

    }

};



// Add new skill
const createSkill = async (req, res) => {

    try {

        const {
            title,
            description,
            level,
            credit_cost
        } = req.body;


        const teacher_id = 1;


        const skill = await Skill.createSkill(
            title,
            description,
            level,
            credit_cost,
            teacher_id
        );


        res.json({

            message: "Skill created successfully",

            skill: skill

        });


    } catch (error) {

        console.log("CREATE SKILL ERROR:", error);

        res.status(500).json({
            message: error.message
        });

    }

};



// Get single skill
const getSkill = async (req, res) => {

    try {

        const skill = await Skill.getSkillById(
            req.params.id
        );

        res.json(skill);


    } catch (error) {

        console.log("GET ONE SKILL ERROR:", error);

        res.status(500).json({
            message: error.message
        });

    }

};



module.exports = {

    getAllSkills,

    createSkill,

    getSkill

};