// 9) Realiza una página que efectúe 3 preguntas de evaluación donde el usuario seleccione a
// través de radio button su respuesta. La página proporcionará la evaluación y las respuestas
// correctas a petición del usuario.

function responder() {
    let a = document.querySelectorAll("input[name=preguntas1]");
    let b = document.querySelectorAll("input[name=preguntas2]");
    let c = document.querySelectorAll("input[name=preguntas3]");
    let aPromedio;
    let bPromedio;
    let cPromedio;
  
  
    if (a[2].checked) {
      
      alert("el primer campo es correcto")
      aPromedio=4
    } else {
      alert("El primer campo es incorrecto");
      aPromedio=1
    }
  
    if (b[0].checked) {
      alert("El segundo campo es correcto");
      bPromedio=2;
    } else {
      alert("El segundo campo es incorrecto");
       bPromedio=1
    }
  
    if (c[1].checked) {
      alert("El tercer campo es correcto");
      cPromedio=4;
    } else {
      cPromedio=1
      alert("El tercer campo es incorrecto");
    }
    
    let suma=aPromedio+bPromedio+cPromedio;
    if(suma>=7){
     
      alert("aprobo " + suma)
    }else{
      alert("desaprobo " + suma)
    }
  }
  
  