function verificaNumero() {
    const escolha = escolhaInput.value
    if(numeroAleatorio == escolha) {
        resposta.innerHTML = `Parabéns, você acertou, o número ${numeroAleatorio}`
        botaoPlay.style.display = "none"
        botaoReset.style.display = "inline"
    } if(numeroAleatorio < escolha){
        resposta.innerHTML = `O resultado é MENOR!!!`
        tentativas++
    } if(numeroAleatorio > escolha){
        resposta.innerHTML = `O resultado é MAIOR!!!`
        tentativas++
    } if(escolha == 101) {
        resposta.innerHTML = `Só até 100 meu amigo!!!`
    }
}