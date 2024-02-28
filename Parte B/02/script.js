// 2) Realice un formulario que contenga Nombre, Apellido, Sexo, Fecha de nacimiento y mail.
// Luego realice las validaciones para cada uno de los campos.

function validar(){

    let patronNombreApellido= /^[a-zA-Z\s]+$/
    
    let patronEmail= /^\S+@\S+\.\S+$/
    var formulario1=document.forms["formulario"]
    
    let nombre1=formulario1.nombre.value
    let apellido1=formulario1.apellido.value
    let email1=formulario1.gmail.value
    console.log(email1)
    if(patronNombreApellido.test(nombre1) && patronNombreApellido.test(apellido1) && patronEmail.test(email1)){
    alert("Datos validos")
    return true;
    }else{
        alert("Datos incorrectos")
        return false;
    }
    
    }