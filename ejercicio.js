const registrar = (nombre, email, mensaje, enviar) => {
    if (nombre !== "" && email !== "" && mensaje !== "") {
    setTimeout(() => enviar(true), 3000);
    } else {
    setTimeout(() => enviar(false), 3000);
    }
    }
    
    function enviarFormulario(validacion) {
    let respuesta = validacion === true ? "¡Formulario enviado con éxito!" : "Por favor completa todos los campos.";
    console.log(respuesta);
    }
    
    let nombre = "Edison";
    let correo = "edison@correo.com";
    let mensaje = "Buenas noches";
    
    registrar(nombre, correo, mensaje, enviarFormulario);
    
    console.log(`Hola ${nombre}, se esta validando los datos...`);