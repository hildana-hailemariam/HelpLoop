
const themeButton = document.querySelector(".theme-btn");


function toggleTheme() {


    document.body.classList.toggle("dark-mode");


    let mode;


    if(document.body.classList.contains("dark-mode")){


        mode = "dark";


        if(themeButton){

            themeButton.innerHTML = "☀️";

        }


    }else{


        mode = "light";


        if(themeButton){

            themeButton.innerHTML = "🌙";

        }


    }



    localStorage.setItem("theme", mode);


}




// Load saved theme

window.addEventListener("load", function(){


    const savedTheme = localStorage.getItem("theme");



    if(savedTheme === "dark"){


        document.body.classList.add("dark-mode");


        if(themeButton){

            themeButton.innerHTML = "☀️";

        }


    }



});





function welcomeUser(){


    alert(
        "Welcome to HelpLoop! Start learning, teaching, and earning credits 🚀"
    );


}









const searchInput = document.querySelector(".search-box input");

const skillCards = document.querySelectorAll(".skill-cards .card");



if(searchInput){


    searchInput.addEventListener("keyup", function(){


        let value = searchInput.value.toLowerCase();



        skillCards.forEach(function(card){


            let text = card.innerText.toLowerCase();



            if(text.includes(value)){


                card.style.display = "block";


            }else{


                card.style.display = "none";


            }


        });


    });


}








// ================================
// Form Validation
// ================================


const forms = document.querySelectorAll("form");



forms.forEach(function(form){


    form.addEventListener("submit", function(event){


        const inputs = form.querySelectorAll("input");


        let valid = true;



        inputs.forEach(function(input){



            if(input.value.trim() === ""){


                valid = false;


            }


        });




        if(!valid){


            event.preventDefault();


            alert(
                "Please fill all required fields."
            );


        }



    });



});








// ================================
// Credit Counter Animation
// ================================


const creditNumber = document.querySelector(".credit");



if(creditNumber){


    let target = parseInt(
        creditNumber.innerText
    );


    let count = 0;



    let timer = setInterval(function(){



        count += 2;



        creditNumber.innerText = count;



        if(count >= target){


            creditNumber.innerText = target;


            clearInterval(timer);


        }



    },20);



}








// ================================
// Smooth Scrolling
// ================================


document.querySelectorAll("a").forEach(function(link){


    link.addEventListener("click",function(){


        document.body.style.opacity = "0.9";


    });


});








// ================================
// Skill Request Button
// ================================


const requestButtons = document.querySelectorAll(
    ".skill-cards .btn"
);



requestButtons.forEach(function(button){



    button.addEventListener("click",function(){



        alert(
            "Your learning request has been sent successfully 🎉"
        );



    });



});

let userCredits = localStorage.getItem("credits");


if(userCredits === null){

    userCredits = 120;

    localStorage.setItem(
        "credits",
        userCredits
    );

}



// Display credits

const creditDisplay = document.getElementById(
    "creditAmount"
);


if(creditDisplay){

    creditDisplay.innerHTML = userCredits;

}





// Spend credits for learning

function learnCourse(courseName, cost){


    userCredits = Number(
        localStorage.getItem("credits")
    );



    if(userCredits >= cost){


        userCredits -= cost;



        localStorage.setItem(
            "credits",
            userCredits
        );



        alert(
            "You joined " 
            + courseName +
            "! -" 
            + cost +
            " credits"
        );


        location.reload();



    }else{


        alert(
            "You need more credits for this course."
        );


    }



}






function teachSkill(skillName, reward){



    userCredits = Number(
        localStorage.getItem("credits")
    );



    userCredits += reward;



    localStorage.setItem(
        "credits",
        userCredits
    );



    alert(
        "You taught " 
        + skillName +
        " and earned +"
        + reward +
        " credits 🎉"
    );



    location.reload();



}
