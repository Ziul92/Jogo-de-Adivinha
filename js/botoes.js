botaoPlay.addEventListener("click", function(evento) {
    evento.preventDefault()
    escolhaInput.focus()
    verificaNumero()
    aumentaTentativas()
})

botaoReset.addEventListener("click", function(evento) {
    evento.preventDefault()
    novoJogo()
})