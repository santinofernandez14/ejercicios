// 17) Realice una página que escriba en un campo de texto una cadena. La cadena debe ser
// escrita de a una letra por vez y el tiempo entre escritura de la letra debe ser 700ms.

function esperar() {

    let caja = document.getElementById("box")
    caja.disabled = true;
    setTimeout(function () {
        caja.disabled = false;

    }, 700);
    
}