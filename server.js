const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;


// Middleware

app.use(express.urlencoded({ extended: true }));

app.use(express.json());


// Serve public files (CSS, JS)

app.use(express.static(path.join(__dirname, "public")));


// Set views folder

app.use(express.static(path.join(__dirname, "views")));





// Home page

app.get("/", (req, res) => {

    res.sendFile(
        path.join(__dirname, "views", "index.html")
    );

});






// Register page

app.get("/register", (req, res) => {

    res.sendFile(
        path.join(__dirname, "views", "register.html")
    );

});






// Login page

app.get("/login", (req, res) => {

    res.sendFile(
        path.join(__dirname, "views", "login.html")
    );

});







// Handle registration

app.post("/register", (req, res) => {


    const user = req.body;


    console.log("New User Registered:");
    console.log(user);



    res.send(
        `
        <h1>Registration Successful 🎉</h1>
        <p>Welcome to HelpLoop, ${user.name}</p>
        <a href="/login">Go to Login</a>
        `
    );


});








// Handle login

app.post("/login", (req, res) => {


    const user = req.body;


    console.log("Login Attempt:");
    console.log(user);



    res.redirect("/dashboard.html");


});







// Profile update

app.post("/profile", (req,res)=>{


    console.log("Profile Updated:");

    console.log(req.body);



    res.send(
        `
        <h1>Profile Saved Successfully ✅</h1>
        <a href="/dashboard.html">
        Return Dashboard
        </a>
        `
    );


});








// Start Server

app.listen(PORT, ()=>{


    console.log(
        `HelpLoop server running on http://localhost:${PORT}`
    );


});