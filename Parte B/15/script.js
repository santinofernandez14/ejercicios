// 15) Realice una página con contenido de texto e imágenes. Esta página debe estar basada
// en una plantilla css. Haga una función JavaScript ejecutada desde un botón que permita
// cambiar el estilo de la página a otros templates.

let cont= 0;
function cambiarEstilo(){
   
   let cambiarEstilo = document.getElementById("imagenes")
   let linea = document.getElementById("texto")
   let cuerpo = document.getElementById("cuerpo")
   let parrafo = document.getElementById("parrafo")
   parrafo.style.color = "red";
   linea.style.color = "blue";
   linea.innerText = "Primera PLANTILLA";
   cuerpo.style.backgroundColor = "green";
   
 }
 function segundaPlantilla(){
    
    let cambiarEstilo = document.getElementById("imagenes")
   let linea = document.getElementById("texto")
   let cuerpo = document.getElementById("cuerpo")
   let parrafo = document.getElementById("parrafo")
   parrafo.style.color = "white";
   linea.style.color = "green";
   linea.innerText = "Segunda Plantilla";
   cuerpo.style.backgroundColor = "black";

 }
 function terceraPlantilla(){
    let cambiarEstilo = document.getElementById("imagenes")
   let linea = document.getElementById("texto")
   let cuerpo = document.getElementById("cuerpo")
   let parrafo = document.getElementById("parrafo")
   parrafo.style.color = "aqua";
   linea.style.color = "black";
   linea.innerText = "Tercera Plantilla";
   cuerpo.style.backgroundColor = "blue";
 }
function principal(){
    cont++;
    switch(cont){
    case 1:
        cambiarEstilo();
        break;
     case 2:
            segundaPlantilla();
         break;
    case 3:
         terceraPlantilla();
         break
    }
}