const db = require("../config/db");


// Get all skills

const getSkills = async () => {

    const result = await db.query(
        "SELECT * FROM skills"
    );

    return result.rows;

};



// Get one skill by ID

const getSkillById = async (id) => {

    const result = await db.query(
        "SELECT * FROM skills WHERE id=$1",
        [id]
    );

    return result.rows[0];

};



// Create a new skill

const createSkill = async (
    title,
    description,
    level,
    credit_cost,
    teacher_id
) => {


    const result = await db.query(

        `INSERT INTO skills
        (title, description, level, credit_cost, teacher_id,create_at)
        VALUES ($1,$2,$3,$4,$5)
        RETURNING *`
        [
            title,
            description,
            level,
            credit_cost,
            teacher_id
        ]

    );


    return result.rows[0];

};



module.exports = {

    getSkills,

    getSkillById,

    createSkill

};