window.addEventListener("load", () => {

    const validation = new JustValidate(".main__contact");
    let isValidate = false;
 
    validation.addField("#name", [

        {
            rule: 'required',
            errorMesagge: "Nombre es obligatorio"
        },
        {
            rule: 'minLength',
            value: 7,
            errorMesagge: "el nombre no puede ser demasiado corto"
        }

    ]);
    validation.addField("#surname", [

        {
            rule: 'required',
        },
        {
            rule: 'maxLength',
            value: 13,
            errorMesagge: 'el nombre no puede ser demasiado largo'
        }

    ]);
    validation.addField("#email", [
        {
            rule: 'required',
        },
        {
            rule: 'email',
        }
    ]);
    validation.addField("#gender", [
        {
            rule: 'required',
        }
    ]);
    validation.addField("#date", [
        {
            rule: 'required',
        },
    ]);
    validation.addField("#edad", [
        {
            rule: 'integer',
        },
        {
            rule: 'required',
        }
    ]);

    validation.onSuccess(() => {
        isValidate = true;
        alert("datos enviados correctamente");
    });

    validation.onFail(()=>{

        alert("faltan datos por ingresar o estan mal")

    })

})