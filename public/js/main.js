// HelpLoop JavaScript


// Dark / Light Mode

function toggleTheme() {

    document.body.classList.toggle("dark-mode");


    // Save user preference

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme", "dark");

    }else{

        localStorage.setItem("theme", "light");

    }

}




// Load saved theme when page opens

window.onload = function(){

    const savedTheme = localStorage.getItem("theme");


    if(savedTheme === "dark"){

        document.body.classList.add("dark-mode");

    }

};





// Simple welcome message

function welcomeUser(){

    alert("Welcome to HelpLoop! Start learning and sharing your skills.");

}