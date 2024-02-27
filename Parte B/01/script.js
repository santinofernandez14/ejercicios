// 1) Realiza una página que muestre un formulario y verifique la entrada de un número que
// esté comprendido entre 1 y 100.

function validar(numero) {

    let expresion = /^([1-9]|[1-9][0-9]|100)$/;

    if (expresion.test(numero)) {
        alert('Datos Correctos')
        return true;
    } else {
        alert('Datos Incorrectos')
        return false;
    }
}
