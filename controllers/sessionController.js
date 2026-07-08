const Session = require("../models/Session");


// Get all sessions

const getAllSessions = async (req, res) => {

    try {

        const sessions = await Session.getSessions();

        res.json(sessions);


    } catch (error) {

        console.log(error);

        res.status(500).send("Server Error");

    }

};




// Create a session booking

const createSession = async (req, res) => {

    try {


        const {
            teacher_id,
            skill_id,
            session_date,
            session_time
        } = req.body;



        const learner_id = req.session.user.id;



        const session = await Session.createSession(

            learner_id,

            teacher_id,

            skill_id,

            session_date,

            session_time

        );



        res.json({

            message: "Session booked successfully",

            session: session

        });



    } catch(error) {


        console.log(error);

        res.status(500).send("Server Error");


    }

};




// Update session status

const updateStatus = async (req, res) => {


    try {


        const {
            status
        } = req.body;



        const session = await Session.updateSessionStatus(

            req.params.id,

            status

        );



        res.json({

            message: "Session updated",

            session: session

        });



    } catch(error) {


        console.log(error);

        res.status(500).send("Server Error");


    }


};




module.exports = {

    getAllSessions,

    createSession,

    updateStatus

};