let numeroSecreto = gerarNumeroAleatorio();

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do numero secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha o numero entre 1 e 10';

function exibirTextoNaTela(tag, texto) {
     let campo = document.querySelector(tag);
     campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número de 1 a 10');

function verificarChute() {
     let chute = document.querySelector('input').value;

     if (chute == numeroSecreto) {
          exibirTextoNaTela('h1', 'Acertou!');
          exibirTextoNaTela('p', 'Voce descobriu o numero secreto!')
     } else {
          if (chute > numeroSecreto) {
               exibirTextoNaTela('p', 'Errou, numero secreto é menor');
          } else {
               exibirTextoNaTela('p', 'Errou, numero secreto é meior');
          }
     }
}

function gerarNumeroAleatorio() {
     return parseInt(Math.random() * 10 + 1);
}