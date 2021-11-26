document.addEventListener('DOMContentLoaded', function() {
    e = document.querySelector('.vagas')
    contador=0
    e.addEventListener('click', function(event) {
        c = document.createElement('div')
        c.classList.add("vagaVerde")
        
        f= document.querySelectorAll('.coluna')
        if(contador%2===0){ 
        f[0].appendChild(c)}
        else{f[1].appendChild(c)}
        contador=contador+1
        
    })
    })
  