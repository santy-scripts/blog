document.addEventListener("DOMContentLoaded", () => {

    setInterval(() => {

        let date = new Date();
        let horas = date.getHours();
        let minutos = date.getMinutes();
        let segundos = date.getSeconds();

        if (horas < 10) horas = "0" + horas;
        if (minutos < 10) minutos = "0" + minutos;
        if (segundos < 10) segundos = "0" + segundos;

        let watch = `${horas}:${minutos}:${segundos}`

        let reloj = document.querySelector(".relojito");

        reloj.innerHTML = watch;

    }), 1000;


});
