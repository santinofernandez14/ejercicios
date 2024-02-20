var lista = new Array ('a','b','c',1,'x',9,'d',4);
var item ;
for (item in lista){

    if (isNaN(lista[item])){
        console.log(lista[item]);
    }

} 

