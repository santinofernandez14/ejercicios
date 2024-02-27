// 3) Realizar un formulario donde: la longitud del nombre sea mayor de cuatro caracteres. El
// nombre sólo debe contener caracteres del alfabeto español (no contiene números ni
// caracteres no alfanuméricos). La edad sólo debe contener números y estar comprendido
// entre 18 y 30. La dirección de correo debe incluir una arroba y su longitud sea superior a
// cinco caracteres.

function validar(nombre, email){

    let patronNombre= /^[a-zA-Z\s]+$/;
    
    let patronEmail= /^\S+@\S+\.\S+$/;
    
    if(patronNombre.test(nombre) && patronEmail.test(email)){
    alert("Datos validos")
    }else if(patronNombre.test(nombre)=="" || patronEmail.test(email)==""){
        alert("Datos incorrectos")
    }
    
    }