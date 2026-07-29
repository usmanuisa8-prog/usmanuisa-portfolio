// ===================================
// Animated Counters Module
// ===================================


function initCounters(){


    const counters =
        document.querySelectorAll(".counter");


    // Stop if counters do not exist

    if(!counters.length){

        return;

    }



    const speed = 100;



    const animateCounter = (counter) => {


        const target =
            Number(counter.dataset.target);


        let count = 0;



        const update = () => {


            const increment =
                Math.ceil(target / speed);



            count += increment;



            if(count < target){


                counter.textContent = count;


                requestAnimationFrame(update);


            } 
            else {


                counter.textContent = target + "+";


            }


        };


        update();


    };



    const observer =
        new IntersectionObserver(
            (entries) => {


                entries.forEach(entry => {


                    if(entry.isIntersecting){


                        animateCounter(
                            entry.target
                        );


                        observer.unobserve(
                            entry.target
                        );


                    }


                });


            },
            {
                threshold: 0.5
            }
        );



    counters.forEach(counter => {


        observer.observe(counter);


    });


}



export default initCounters;