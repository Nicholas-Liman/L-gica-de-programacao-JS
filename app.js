alert('Boas-vindas ao jogo do número secreto');
let desafio = 100;
let numeroSecreto = parseInt(Math.random() * desafio + 1);
let chute;
let tentativas = 1;

while (numeroSecreto != chute){
    chute = prompt(`Escolha um número entre 1 e ${desafio}`);
    
    if (chute == numeroSecreto) {
        break;
    }

    else {
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`);
        }
        else{
            alert(`O número secreto é menor que ${chute}`);
        }

        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

    alert(`Isso aí! você descobriu o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}!`);

