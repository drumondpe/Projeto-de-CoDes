document.addEventListener('DOMContentLoaded', function(){
    botao = document.querySelector('#salvar')
    botao.addEventListener('click', function(event){
    botao.innerHTML = 'Salvo!'
    botao.style.color = 'rgb(0, 255, 0)'
    botao.style.borderColor = 'rgb(0, 255, 0)'

    })
})