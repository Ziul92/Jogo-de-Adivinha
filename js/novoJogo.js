function novoJogo() {
    botaoReset.style.display = "none"
    botaoPlay.style.display = "inline"
    tentativas = 0
    tentativa.innerHTML = `Tentativas: ${tentativas}`
    resposta.innerHTML = `Boa sorte`
    numeroAleatorio = Math.round(Math.random()*100)
}