let botao = document.querySelector('button')
let div = document.querySelector('.lupa-encolhida')
let div2 = document.querySelector('.lupa-estendida')

function aumentar() {
    div.classList.add('lupa-estendida')
    div.classList.remove('lupa-encolhida')
}

function diminuir() {
    div.classList.add('lupa-encolhida')
    div.classList.remove('lupa-estendida')
}

botao.onclick = function () {
   if (botao.querySelector('div').className === 'lupa-encolhida') {
       aumentar();
   } else {
       diminuir();
   }
}

