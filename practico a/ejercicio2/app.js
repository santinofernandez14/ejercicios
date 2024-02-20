function dibujarRectangulo(base, altura) {

    for (let i = 0; i < altura; i++) {
        console.log("*  ".repeat(base));
    }

}

let base = parseInt(prompt("Ingresa la base del rectangulo:"));

let altura = parseInt(prompt("Ingresa la altura del rectangulo:"));

dibujarRectangulo(base, altura);