// ===================================
// Mobile Navigation Module
// ===================================


function initNavigation(){


    const hamburger = document.querySelector(".hamburger");

    const navMenu = document.querySelector(".nav-menu");



    // Stop if elements do not exist

    if(!hamburger || !navMenu){

        return;

    }



    hamburger.addEventListener(
        "click",
        () => {


            hamburger.classList.toggle("active");


            navMenu.classList.toggle("active");


        }
    );


}



export default initNavigation;