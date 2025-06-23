let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
     let campo = document.querySelector(tag);
     campo.innerHTML = texto;
}

function exibirMensagemInicial() {
     exibirTextoNaTela('h1', 'Jogo do número secreto');
     exibirTextoNaTela('p', 'Escolha um número de 1 a 10');
}

exibirMensagemInicial();

function verificarChute() {
     let chute = document.querySelector('input').value;

     if (chute == numeroSecreto) {
          exibirTextoNaTela('h1', 'Acertou!');
          let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
          let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
          exibirTextoNaTela('p', mensagemTentativas);
          document.getElementById('reiniciar').removeAttribute('disabled');
     } else {
          if (chute > numeroSecreto) {
               exibirTextoNaTela('p', 'Errou, numero secreto é menor');
          } else {
               exibirTextoNaTela('p', 'Errou, numero secreto é maior');
          }
          tentativas++;
          limparCampo();
     }
}

function gerarNumeroAleatorio() {
     let numeroEscolhido = parseInt(Math.random() * 10 + 1);
     if (listaDeNumerosSorteados.includes(numeroEscolhido)){
          return gerarNumeroAleatorio();
     } else {
          listaDeNumerosSorteados.push(numeroEscolhido);
          console.log(listaDeNumerosSorteados);
          return numeroEscolhido;
     }
}

function limparCampo() {
     chute = document.querySelector('input');
     chute.value = '';
}

function reiniciarJogo() {
     numeroSecreto = gerarNumeroAleatorio();
     limparCampo();
     tentativas = 1;
     exibirMensagemInicial();
     document.getElementById('reiniciar').setAttribute('disabled', true);
}
