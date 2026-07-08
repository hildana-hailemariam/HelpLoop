const Skill = require("../models/Skill");


// Display all skills

const getAllSkills = async (req, res) => {

    try {

        const skills = await Skill.getSkills();

        res.json(skills);


    } catch(error) {

        console.log(error);

        res.status(500).send("Server Error");

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



        const teacher_id = req.session.user.id;



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



    } catch(error) {

        console.log(error);

        res.status(500).send("Server Error");

    }


};




// Get single skill

const getSkill = async (req,res)=>{


    try {


        const skill = await Skill.getSkillById(
            req.params.id
        );


        res.json(skill);



    } catch(error){


        console.log(error);

        res.status(500).send("Server Error");


    }


};




module.exports = {

    getAllSkills,

    createSkill,

    getSkill

};