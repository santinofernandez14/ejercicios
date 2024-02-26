// 6) Realiza una página que muestre cinco cuadrados de diferentes colores. Cuando el ratón
// pase por encima de alguno de ellos el color de fondo será del color de relleno del cuadrado.

let colorOriginal = document.body.style.background;

function cambiarColor(elemento) {
    let elemBody = document.getElementById("contenedor");
    elemBody.style.backgroundColor = elemento.style.backgroundColor;
}

function restablecerColor() {
    let elemBody = document.getElementById("contenedor");
    elemBody.style.backgroundColor = colorOriginal;
}
