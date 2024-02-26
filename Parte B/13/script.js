// let imagenes = ['url("img01.jpeg")', 'url("img02.jpeg")', 'url("img03.jpeg")']
let imagenes = ["img01.jpeg", "img02.jpeg", "img03.jpeg"]
let cont = 0;
console.log(cont)

function anterior() {
    cont--;
    if (cont < 0) {
        cont = 0;
    }
    let div = document.getElementById("contIMG")
    div.src = imagenes[cont]
    // div.style.backgroundImage = imagenes[cont];
    console.log(cont)
}

function siguiente() {
    cont++;
    if (cont > 2) {
        cont = 2
    }
    let div = document.getElementById("contIMG")
    //div.style.backgroundImage = imagenes[cont];
    div.src = imagenes[cont]
    console.log(cont)

}