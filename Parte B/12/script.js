// 12) Realizar una página que permita modificar (añadir, borrar, modificar) al gusto del usuario
// los contenidos de un elemento SELECT de un formulario.

function agregarOpcion() {
    let select = document.getElementById("opciones");
    let nuevaOpcion = document.createElement("option");
    nuevaOpcion.text = prompt("Ingrese el texto de la nueva opcion:");
    select.add(nuevaOpcion);
}

function modificarOpcion() {
    let select = document.getElementById("opciones");
    let opcionSeleccionada = select.selectedIndex;

    if (opcionSeleccionada == -1) {
        alert("Seleccione una opcion para modificar");
    } else {
        select.options[opcionSeleccionada].text = prompt("Ingrese el nuevo texto de la opcion:")
    }
}

function borrarOpcion() {
    let select = document.getElementById("opciones");
    let opcionSeleccionada = select.selectedIndex;

    if (opcionSeleccionada == -1) {
        alert("Seleccione una opcion para borrar.");
    } else {
        select.remove(opcionSeleccionada);
    }
}