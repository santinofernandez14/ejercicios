// 5) Realice una página donde el usuario pueda cargar un contacto. El contacto de esa
// persona debe tener al menos un teléfono y como máximo 3. Además debe ser obligatoria la
// carga del mail. Realice las validaciones necesarias.

function validar() {
        
    let miFormulario = document.forms["formulario"]
    let gmail2 = miFormulario.gmail.value; 
    let numero = miFormulario.numero.value;
    let patronEmail= /^\S+@\S+\.\S+$/;

    console.log("Este es su mail :" + gmail2)
    
    if (patronEmail.test(gmail2) || gmail2=="" || isNaN(numero) || numero == "") {
        alert("Ingrese bien los campos")
        return true;
    } else {

        alert("Su usuario se ingreso con exito")
        return false;
    }

}