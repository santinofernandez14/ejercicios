let a=true;
function cambiar(){



if(a){
    let div=document.getElementById("p1")
    div.className = "p2"
    let div2=document.getElementById("p2")
    div2.className="p1"
    a=false;
}else{
    let div=document.getElementById("p1")
    div.className = "p1"
    let div2=document.getElementById("p2")
    div2.className="p2"
    a=true;
}



}