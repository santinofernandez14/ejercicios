function validar() {
        
    let miFormulario = document.forms["formulario"]
    let gmail2 = miFormulario.gmail.value; 
    let numero = miFormulario.numero.value;

    
    console.log("Este es su mail :" + gmail2)
   
 
    
    if (gmail2 == "" || isNaN(numero) || numero == "") {
        alert("Ingrese bien los campos")
        return true;
    } else {

        alert("Su usuario se ingreso con exito")
        return false;
    }


}