document.addEventListener('DOMContentLoaded', function(){
vagasVerdes = document.querySelectorAll('.vagaVerde')
vagasVermelhas = document.querySelectorAll('.vagaVermelha')
vd = true
vm = true

for(vaga of vagasVerdes){
    vaga.addEventListener('click',function(event){
        if(vd){
            event.target.classList.remove('vagaVerde')
            event.target.classList.add('vagaVermelha')
            vd=false
        }
        else{
            event.target.classList.remove('vagaVermelha')
            event.target.classList.add('vagaVerde')
            vd=true
        }
    })
}
for(vaga1 of vagasVermelhas){
    vaga1.addEventListener('click',function(event){
        if(vm){
            event.target.classList.remove('vagaVermelha')
            event.target.classList.add('vagaVerde')
            vm=false
        }
        else{
            event.target.classList.remove('vagaVerde')
            event.target.classList.add('vagaVermelha')
            vm=true
        }
    })
}
})