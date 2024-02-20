let persona = new Array(5);
let array1 = ['nombre','apellido','edad','peso','genero']

for (let i = 0; i < persona.length; i++) {
    
    persona[i] = (prompt('ingrese el '+array1[i]))
    if(i==0 || i==1 || i==4){
       if(!isNaN(persona[i])) {
        alert('no ingrese numeros');
        i=i-1;
       }
    }
    if(i==2 || i==3){
        if(isNaN(persona[i])){
            alert('no ingrese palabras')
            i=i-1;
        }
        
    }

    }
