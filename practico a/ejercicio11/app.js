let fechaString = prompt('ingrese una fecha')

let fecha;

let partesFecha = fechaString.split("-");

fecha = new Date(partesFecha[2], partesFecha[1] - 1, partesFecha[0]);

if (fecha.getDate() === Number(partesFecha[0]) && fecha.getMonth()===Number(partesFecha[1]-1) && 
fecha.getFullYear()===Number(partesFecha[2]) && partesFecha[2] >= 1000 && partesFecha[2] <= 9999 ) {
    alert("La fecha es valida")
} else {
    alert("La fecha es invalida")
}