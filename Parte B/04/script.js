// 4) Realice un formulario para la carga de datos de un CD. Realice las validaciones
// correspondientes. Por medio de un botón agregar canción se debe habilitar una línea nueva
// para cargar la canción (nombre, compositor, duración).

let cont = 0;

function agregarLinea() {

    let maximo = document.getElementById("cantidad");

    console.log(cont)
    console.log(maximo.value)

    if (maximo.value != "" && !isNaN(maximo.value) && cont < maximo.value) {

        cont++;

        let canciones = document.getElementById("canciones")
        let nuevaCancion = document.createElement("div")
        nuevaCancion.innerHTML = `
            <div class="cancion">
                <label for="nombre${cont}">Nombre:</label>
                <input class = "patronNombre" type="text" name="nombre${cont}" id="nombre${cont}">
                
                <label for="compositor${cont}">Compositor:</label>
                <input class = "patronNombre" type="text" name="compositor${cont}" id="compositor${cont}">
                
                <label for="duracion${cont}">Duracion:</label>
                <input class="patronDuracion" type="text" name="duracion${cont}" id="duracion${cont}">
    
                <br><br>
            </div>
        `;
        canciones.appendChild(nuevaCancion)
    }

}

function testear(expresion, asd) {
    return expresion.test(asd);
}

function validar() {
    let patronNombres = /^[a-zA-Z\s]+$/
    let patronAño = /^\d{4}$/
    let patronDuracion = /^(\d{2}):(\d{2})$/

    let campos = document.getElementById("cd").getElementsByTagName("input");

    for (let i = 0; i < campos.length; i++) {

        if (campos[i].className === "patronNombre") {
            if (!testear(patronNombres, campos[i].value)) {
                alert("Datos incorrectos")
                campos[i].style.color = "red";
                break;
            } else {
                campos[i].style.color = "black";
            }
        }

        if (campos[i].className === "patronAño") {
            if (!testear(patronAño, campos[i].value)) {
                alert("Datos incorrectos")
                campos[i].style.color = "red";
                break;
            } else {
                campos[i].style.color = "black";
            }
        }

        if (campos[i].className === "patronDuracion") {
            alert("Datos incorrectos")
            if (!testear(patronDuracion, campos[i].value)) {
                campos[i].style.color = "red";
                break;
            } else {
                campos[i].style.color = "black";
            }
        }

    }
}



