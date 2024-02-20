let fechaString = prompt('ingrese una fecha')
let fecha=new Date();

let partesFecha = fechaString.split("-");

try{
fecha = Date.parse(partesFecha[2], partesFecha[1]-1 , partesFecha[0]);
}catch(error){
    alert('ingresaste mal la fecha '+ error)
}
console.log(fecha.getDate()+'-'+ fecha.getMonth()+'-'+ fecha.getFullYear()); // 
console.log(fecha.getDate())


var fecha3 = new Date();


let dia = fecha3.getDate();
let mes = fecha3.getMonth() + 1; 
//var fechaFormateada = dia + '-' + mes + '-' + año;

console.log(fecha3.getDate()); 

let resta=fecha-fecha3;
console.log(resta)
let dias=(resta/(1000*60*60*24));
console.log(dias)
