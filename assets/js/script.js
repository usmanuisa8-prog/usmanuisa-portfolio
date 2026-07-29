// ===================================
// Main JavaScript Controller
// ===================================


import initNavigation from "./modules/navigation.js";
import initTyping from "./modules/typing.js";
import initScroll from "./modules/scroll.js";
import initScrollReveal from "./modules/animations.js";
import initCounters from "./modules/counters.js";



// ===================================
// Application Initialization
// ===================================

document.addEventListener(
    "DOMContentLoaded",
    () => {


        initNavigation();


        initTyping();


        initScroll();


        initScrollReveal();

        initCounters();


    }
);
    // ===================================
// PROJECT DETAIL MODAL
// ===================================


const projectData = {


    transitlink: {


        title:"TransitLink",

        description:
        "An Android vehicle tracking application designed to help transport agencies monitor fleet operations and improve passenger transport management.",


        technologies:[
            "Java",
            "Android",
            "SQLite"
        ],


        features:[
            "Real-time vehicle tracking concept",
            "Mobile application architecture",
            "Local data storage",
            "Designed for transport agencies"
        ]


    },



    "ai-business": {


        title:"AI Business Assistant",


        description:
        "A multi-tenant SaaS enterprise management platform designed to help SMEs manage business operations with future AI-powered assistance.",


        technologies:[
            "Java",
            "Spring Boot",
            "PostgreSQL",
            "AI Integration"
        ],


        features:[
            "Multi-tenant architecture",
            "Authentication and authorization",
            "Inventory and business management",
            "Enterprise software design"
        ]


    },



    "parcel-system": {


        title:"Parcel Management System",


        description:
        "An offline parcel registration and delivery management system developed to replace manual record keeping and improve logistics operations.",


        technologies:[
            "PHP",
            "MySQL",
            "Bootstrap"
        ],


        features:[
            "Offline-first design",
            "Parcel registration",
            "Delivery tracking",
            "Database management"
        ]


    },



    "enterprise-system": {


        title:"Enterprise Management System",


        description:
        "A business management application supporting sales, customers, employees, inventory, and reporting.",


        technologies:[
            "Laravel",
            "PHP",
            "MySQL"
        ],


        features:[
            "Customer management",
            "Sales management",
            "Employee management",
            "Business reports"
        ]


    },



    portfolio: {


        title:"Personal Portfolio",


        description:
        "A responsive developer portfolio website created to showcase software engineering projects, skills, and professional experience.",


        technologies:[
            "HTML5",
            "CSS3",
            "JavaScript"
        ],


        features:[
            "Responsive design",
            "Modern UI architecture",
            "Animations",
            "SEO optimization"
        ]


    }


};



const modal = document.getElementById("projectModal");

const buttons = document.querySelectorAll(".project-details");

const closeBtn = document.querySelector(".modal-close");



buttons.forEach(button => {


    button.addEventListener("click",()=>{


        const project =
        projectData[button.dataset.project];


        document.getElementById("modalTitle").textContent =
        project.title;



        document.getElementById("modalDescription").textContent =
        project.description;



        document.getElementById("modalTech").innerHTML =
        project.technologies
        .map(tech =>
        `<span>${tech}</span>`
        )
        .join("");



        document.getElementById("modalFeatures").innerHTML =
        project.features
        .map(feature =>
        `<li>${feature}</li>`
        )
        .join("");



        modal.classList.add("active");


    });


});



closeBtn.addEventListener("click",()=>{


    modal.classList.remove("active");


});



modal.addEventListener("click",(e)=>{


    if(e.target === modal){

        modal.classList.remove("active");

    }

});
// ===================================
// DARK MODE TOGGLE
// ===================================


const themeToggle = document.getElementById(
    "theme-toggle"
);


const body = document.body;



const savedTheme = localStorage.getItem(
    "theme"
);



if(savedTheme === "dark"){

    body.classList.add("dark-mode");

    themeToggle.innerHTML =
    '<i class="bi bi-sun-fill"></i>';

}



themeToggle.addEventListener(
"click",
()=>{


    body.classList.toggle(
        "dark-mode"
    );


    const darkMode =
    body.classList.contains(
        "dark-mode"
    );


    if(darkMode){


        localStorage.setItem(
            "theme",
            "dark"
        );


        themeToggle.innerHTML =
        '<i class="bi bi-sun-fill"></i>';


    }else{


        localStorage.setItem(
            "theme",
            "light"
        );


        themeToggle.innerHTML =
        '<i class="bi bi-moon-fill"></i>';


    }


});

// ===================================
// SCROLL REVEAL ANIMATION
// ===================================


const revealElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-zoom"
);



const revealObserver = new IntersectionObserver(

(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add(
                "active"
            );


        }


    });


},

{

    threshold:0.15

}



);



revealElements.forEach(element=>{


    revealObserver.observe(element);


});
// ===================================
// PAGE LOADER
// ===================================


window.addEventListener(
"load",
()=>{


const loader =
document.querySelector(".loader");


loader.classList.add("hide");


});
// ===================================
// BACK TO TOP
// ===================================


const backTop =
document.getElementById("backTop");



window.addEventListener(
"scroll",
()=>{


if(window.scrollY > 500){

    backTop.classList.add("show");

}else{

    backTop.classList.remove("show");

}


});



backTop.addEventListener(
"click",
()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});

