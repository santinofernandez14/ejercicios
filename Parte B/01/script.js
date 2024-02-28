// 1) Realiza una página que muestre un formulario y verifique la entrada de un número que
// esté comprendido entre 1 y 100.

var formulario=document.forms["form_numero"]

function validar(){
    console.log("adentro")
   
    let expresion = /^([1-9]|[1-9][0-9]|100)$/;
    
   let valor=formulario.numero.value
   
    if(expresion.test(valor)){
        alert('Datos Correctos')
        return true;
    }else{
        alert('Datos Incorrectos')
        return false;
    }
}
