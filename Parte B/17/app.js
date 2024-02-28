// 17) Realice una página que escriba en un campo de texto una cadena. La cadena debe ser
// escrita de a una letra por vez y el tiempo entre escritura de la letra debe ser 700ms.

const btn = document.getElementById("btn");
btn.addEventListener("click", comprobar);


function comprobar(){
    try{
        let indice = 0
        const frase =  document.getElementById("fraseIngresada").value
        const respuesta = document.getElementById("respuesta");

        let a = setInterval(() =>{
            respuesta.innerHTML += frase.charAt(indice);
            indice++;
            if(indice == frase.length){
                clearInterval(a)
            }
        },700)



    }catch(err){

    }
}