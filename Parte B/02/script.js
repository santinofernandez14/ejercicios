// 2) Realice un formulario que contenga Nombre, Apellido, Sexo, Fecha de nacimiento y mail.
// Luego realice las validaciones para cada uno de los campos.

function validar(nombre, apellido, email){

let patronNombreApellido= /^[a-zA-Z\s]+$/

let patronEmail= /^\S+@\S+\.\S+$/

if(patronNombreApellido.test(nombre) && patronNombreApellido.test(apellido) && patronEmail.test(email)){
alert("Datos validos")
}else{
    alert("Datos incorrectos")
}

}