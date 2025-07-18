//cambiar tema
let green = document.querySelector(".themes__green");
let red = document.querySelector(".themes__red");
let blue = document.querySelector(".themes__blue");
let page = document.querySelector("html");

green.addEventListener("click", ()=>{

    page.removeAttribute("class");
    page.classList.add("theme__green--active");

})


red.addEventListener("click", ()=>{

    page.removeAttribute("class");
    page.classList.add("theme__red--active");

})


blue.addEventListener("click", ()=>{

    page.removeAttribute("class");
    page.classList.add("theme__blue--active");

})