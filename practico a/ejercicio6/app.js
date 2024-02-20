let cadena=prompt("Ingrese una palabra");

let arrayPalabra=cadena.split(" ");

console.log("La cantidad de palabras es "+arrayPalabra.length);

console.log("La primera palabra es "+arrayPalabra[0]);

console.log("La ultima palabra es "+arrayPalabra[arrayPalabra.length-1]);

let arrayinvertido = arrayPalabra.slice();
console.log(arrayinvertido[0])
console.log(arrayPalabra[0])

console.log("Las palabras colocadas en orden inverso son "+arrayinvertido.reverse());

console.log("Las palabras ordenadas de la a hasta la z "+arrayPalabra.sort());

console.log("Las palabras ordenadas de la z hasta la a "+arrayPalabra.sort((a,b)=> b.localeCompare(a)));

console.log(arrayinvertido[0])
console.log(arrayPalabra[0])