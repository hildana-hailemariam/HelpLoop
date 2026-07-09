const User = require("../models/User");
const bcrypt = require("bcrypt");



const register = async (req, res) => {

    try {

        const {
            fullname,
            email,
            password
        } = req.body;


        const existingUser = await User.getUserByEmail(email);


        if (existingUser) {
            return res.send("User already exists");
        }


        const hashedPassword = await bcrypt.hash(password, 10);


        const user = await User.createUser(
            fullname,
            email,
            hashedPassword
        );


        res.json({
            message: "Registration successful",
            user: user
        });


    } catch (error) {

        console.log(error);
        res.status(500).send("Server Error");

    }

};




// Login User

const login = async (req, res) => {


    try {

        const {
            email,
            password
        } = req.body;



        const user = await User.getUserByEmail(email);



        if (!user) {

            return res.send("User not found");

        }



        const checkPassword = await bcrypt.compare(
            password,
            user.password
        );



        if (!checkPassword) {

            return res.send("Wrong password");

        }



        req.session.user = user;



        res.json({

            message: "Login successful",
            user: user

        });



    } catch(error){

        console.log(error);
        res.status(500).send("Server Error");

    }


};




module.exports = {

    register,

    login

};
