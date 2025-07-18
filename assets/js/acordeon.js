document.addEventListener("DOMContentLoaded", ()=>{

    let accordion = document.querySelectorAll(".acordeon__collapse");

    accordion.forEach(collapse =>{

        let header = collapse.querySelector(".collapse__header");

        header.addEventListener("click", ()=>{

            collapse.classList.toggle("acordeon__collapse--open");

        });

    });

    
});