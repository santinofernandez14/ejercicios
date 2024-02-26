// 7) Realiza una página que muestre un formulario para la conversión de Pesos a Dólares y
// viceversa. Los campos del formulario han de poder ser limpiados.

function cambiarPesoADolar() {
    let elemento = document.getElementById('pesos')
    let valorPesos = elemento.value;
    let resultado = valorPesos / 1100
    alert("La cantidad de dolares es " + resultado)
}

function cambiarDolarApesos() {
    let elemento = document.getElementById('dolar')
    let valorPesos = elemento.value;
    let resultado = valorPesos * 1100
    alert("La cantidad de pesos es " + resultado)
}