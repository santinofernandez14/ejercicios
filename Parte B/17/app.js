function esperar(){
    let caja=document.getElementById("box")
    caja.disabled=true;
    setTimeout(function() {
        caja.disabled = false;
    }, 700);
    
    
   
}