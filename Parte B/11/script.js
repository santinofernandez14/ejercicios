// 11) Realiza una página que muestre una imagen que cambie cuando el ratón pasa por
// encima de la imagen y que vuelva a cambiar cuando salga de ella.

function cambiarImagen() {
    let imagen = document.getElementById("imagen")
    imagen.src = "img2.jpg"
}

function restablecerImagen() {
    let imagen = document.getElementById("imagen")
    imagen.src = "img1.jpg"
}
