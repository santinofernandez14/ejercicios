// 8) Realiza una página que capture las coordenadas del ratón y las muestre en el título del
// documento (title).

function cambiarTitulo(event) {
    let titulo = document.getElementById("titulo")
    let x = event.clientX;
    let y = event.clientY;
    titulo.innerText = "x = "+x+" - y = "+y;
}