// 3) Realizar un formulario donde: la longitud del nombre sea mayor de cuatro caracteres. El
// nombre sólo debe contener caracteres del alfabeto español (no contiene números ni
// caracteres no alfanuméricos). La edad sólo debe contener números y estar comprendido
// entre 18 y 30. La dirección de correo debe incluir una arroba y su longitud sea superior a
// cinco caracteres.

function validar(){
    var miformulario=document.forms["formulario_n"]
    let patronNombre= /^[a-zA-Z\s]+$/;
    
    let patronEmail= /^\S+@\S+\.\S+$/;

   
    let valor=miformulario.nombre.value;
    let valor4=miformulario.gmail.value
    console.log(valor4)
    if(patronNombre.test(valor) && patronEmail.test(valor4)){
    alert("Datos validos")
    return true;
    }else if(patronNombre.test(valor)=="" || patronEmail.test(valor4)==""){
        alert("Datos incorrectos")
        return false;
    }else{
        alert("datos incorrectos")
        return false;
    }
    
    }