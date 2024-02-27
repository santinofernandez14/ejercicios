// 2) Realice un formulario que contenga Nombre, Apellido, Sexo, Fecha de nacimiento y mail.
// Luego realice las validaciones para cada uno de los campos.

function validar(nombre, apellido, email, fecha) {

    let patronNombreApellido = /^[a-zA-Z\s]+$/

    let patronEmail = /^\S+@\S+\.\S+$/

    if (patronNombreApellido.test(nombre) && patronNombreApellido.test(apellido) && patronEmail.test(email) && validarFecha(fecha)) {
        alert("Datos validos")
        return true;
    } else {
        alert("Datos incorrectos")
        return false;
    }

}

function validarFecha(fecha) {
    let partesFecha = fecha.split("-");

    let fechaParseada = new Date(partesFecha[2], partesFecha[1] - 1, partesFecha[0]);

    if (fechaParseada.getDate() === Number(partesFecha[0]) && fechaParseada.getMonth() === Number(partesFecha[1] - 1) &&
        fechaParseada.getFullYear() === Number(partesFecha[2]) && partesFecha[2] >= 1000 && partesFecha[2] <= 9999) {
        return true;
    } else {
        return false;
    }
}