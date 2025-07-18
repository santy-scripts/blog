//scroll Top

window.addEventListener("DOMContentLoaded", ()=>{

    let btnTop = document.querySelector(".footer__top");

    btnTop.addEventListener("click", ()=>{

        window.scroll({
            top: 0, //pixel en el que se posiciona
            left: 0,
            behavior: "smooth"
        })

    });


});