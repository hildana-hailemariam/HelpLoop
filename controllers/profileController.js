const User = require("../models/User");


// Show user profile

const getProfile = async (req, res) => {

    try {

        const userId = req.session.user.id;


        const result = await User.getUserById(userId);


        res.json(result);


    } catch (error) {

        console.log(error);

        res.status(500).send("Server Error");

    }

};




// Update profile

const updateProfile = async (req, res) => {


    try {

        const userId = 1;


        const {
            fullname,
            email
        } = req.body;



        const user = await User.updateUser(

            userId,

            fullname,

            email

        );



        res.json({

            message: "Profile updated successfully",

            user: user

        });



    } catch(error) {


        console.log(error);

        res.status(500).send("Server Error");


    }


};




module.exports = {

    getProfile,

    updateProfile

};