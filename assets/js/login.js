window.addEventListener("DOMContentLoaded", () => {


    let formulario = document.querySelector(".aside__login");

    function usuario(user){
        let nombre = document.querySelector("#name").value;
        let correo = document.querySelector("#email").value;
        let contraseña = document.querySelector("#pass").value;

        user = {
            name: nombre,
            email: correo,
            pass: contraseña
        }

        localStorage.setItem("user", JSON.stringify(user));

        return user;

    }

    formulario.addEventListener("submit", () => {

        event.preventDefault();

        usuario();
        
        location.reload();

    })


    if (localStorage.length != 0) {

        //OCULTANDO TITULO Y INPUTS
        document.querySelector(".login__container-title").style.display = "none";
        document.querySelector("#login").style.display = "none";

        inputs = document.querySelectorAll(".login__from-group");

        inputs.forEach(element => {
            element.style.display = "none";
        });

        //LLAMANDO FUNCION PARA MOSTRAR NOMBRE DEL USUARIO INGRESADO EN LOCALSTORAGE
        let nombreUsuario = JSON.parse(localStorage.getItem("user"))

        //IMPRESION DEL NOMBRE DEL USUARIO Y BOTON SALIR
        formulario.innerHTML += `

            <h3>Bienvenido ${nombreUsuario.name}</h3>    
            <input class="login__submit" type="button" value="salir" id="exit"></input>
            
            `;

        let salir = document.querySelector("#exit");

        salir.addEventListener("click", () => {

            localStorage.clear();
            location.reload();

        })
    }


});