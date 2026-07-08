const db = require("../config/db");


// Get all sessions

const getSessions = async () => {

    const result = await db.query(
        "SELECT * FROM sessions"
    );

    return result.rows;

};




// Get session by ID

const getSessionById = async (id) => {

    const result = await db.query(
        "SELECT * FROM sessions WHERE id=$1",
        [id]
    );

    return result.rows[0];

};




// Create a new session booking

const createSession = async (
    learner_id,
    teacher_id,
    skill_id,
    session_date,
    session_time
) => {


    const result = await db.query(

        `INSERT INTO sessions
        (learner_id, teacher_id, skill_id, session_date, session_time)
        VALUES ($1,$2,$3,$4,$5)
        RETURNING *`,

        [
            learner_id,
            teacher_id,
            skill_id,
            session_date,
            session_time
        ]

    );


    return result.rows[0];

};




// Update session status

const updateSessionStatus = async (
    id,
    status
) => {


    const result = await db.query(

        `UPDATE sessions
        SET status=$1
        WHERE id=$2
        RETURNING *`,

        [
            status,
            id
        ]

    );


    return result.rows[0];

};




module.exports = {

    getSessions,

    getSessionById,

    createSession,

    updateSessionStatus

};