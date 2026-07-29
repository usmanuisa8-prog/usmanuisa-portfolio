// ===================================
// Typing Effect Module
// ===================================


function initTyping(){


    const roles = [

    "Software Developer",

    "Java Developer",

    "Android Developer",

    "Full-Stack Web Developer",

    "Hardware & Network Specialist"

];


    const typingText = document.getElementById("typing-text");



    // Stop if element does not exist

    if(!typingText){

        return;

    }



    let roleIndex = 0;



    setInterval(() => {


        roleIndex = (roleIndex + 1) % roles.length;


        typingText.textContent = roles[roleIndex];


    }, 2500);



}



export default initTyping;