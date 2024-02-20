let num=Math.floor(Math.random() * 10);
let numIng;
let contador=0;

numeroAleatorio();

function numeroAleatorio(){
    do{
    numIng=parseInt(prompt("Ingrese un numero "));

    if (isNaN(numIng)){
       alert("Debes ingresar un numero")
    }else if (numIng>num){
            alert("El numero ingresado es mayor al numero aleatorio")
        } else if(numIng<num){
            alert("El numero ingresado es menor al numero aleatorio")
        }else {
            alert("Acertaste el numero en "+ contador +" intentos")
            break;
        }
        contador++;
        
       }while (true)
    }