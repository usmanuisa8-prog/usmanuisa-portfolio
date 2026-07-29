/* ===================================
   Scroll Reveal Animation
=================================== */


function initScrollReveal(){

    const elements = document.querySelectorAll(".reveal");


    function reveal(){

        const windowHeight = window.innerHeight;


        elements.forEach(element => {

            const position =
                element.getBoundingClientRect().top;


            if(position < windowHeight - 100){

                element.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        reveal
    );


    reveal();

}



export default initScrollReveal;