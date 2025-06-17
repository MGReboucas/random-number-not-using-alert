//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do numero secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha o numero entre 1 e 10';

function exibirTextoNaTela(tag, texto){
     let campo = document.querySelector(tag);
     campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'EScolha um número de 1 a 10');

function verificarChute() {
     console.log('Botão selecionado')
}