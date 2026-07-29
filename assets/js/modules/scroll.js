// ===================================
// Scroll Effects Module
// ===================================


function initScroll(){


    // ===============================
    // Header Scroll Effect
    // ===============================

    const header = document.querySelector(".header");


    if(header){


        window.addEventListener(
            "scroll",
            () => {


                if(window.scrollY > 50){

                    header.classList.add("scrolled");

                } 
                else {

                    header.classList.remove("scrolled");

                }


            }
        );


    }




    // ===============================
    // Skills Animation
    // ===============================

    const skills = document.querySelectorAll(".skill-progress");



    if(skills.length){


        window.addEventListener(
            "scroll",
            () => {


                skills.forEach(skill => {


                    const position =
                        skill.getBoundingClientRect().top;



                    if(position < window.innerHeight){


                        skill.style.transition = "1.5s";


                    }


                });


            }
        );


    }


}



export default initScroll;